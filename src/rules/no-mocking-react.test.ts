import { TSESLint } from "@typescript-eslint/experimental-utils";
import resolveFrom from "resolve-from";

import rule from "./no-mocking-react";

const ruleTester = new TSESLint.RuleTester({
  parser: resolveFrom(require.resolve("eslint"), "espree"),
  parserOptions: {
    ecmaVersion: 2015,
  },
});

ruleTester.run("no-mocking-react", rule, {
  valid: [
    `jest.mock("unrelated");`,
    `unrelated.mock("react");`,
    `jest.unrelated("react");`,
    `jest("react");`,
  ],
  invalid: [
    {
      code: `jest.mock("react")`,
      errors: [
        {
          column: 1,
          line: 1,
          messageId: "mockReact",
        },
      ],
    },
  ],
});
