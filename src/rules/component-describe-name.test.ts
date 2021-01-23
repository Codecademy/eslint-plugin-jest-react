import { TSESLint } from "@typescript-eslint/experimental-utils";
import resolveFrom from "resolve-from";

import rule from "./component-describe-name";

const ruleTester = new TSESLint.RuleTester({
  parser: resolveFrom(require.resolve("eslint"), "espree"),
  parserOptions: {
    ecmaVersion: 2015,
  },
});

ruleTester.run("component-describe-name", rule, {
  valid: [
    `describe("unrelated text", () => {})`,
    `describe(MyComponent, () => {})`,
    `describe("MyComponent", () => {})`,
    `describe("<MyComponent prop />", () => {})`,
  ],
  invalid: [
    {
      code: `describe("<MyComponent/>", () => {})`,
      errors: [
        {
          column: 10,
          line: 1,
          messageId: "testName",
        },
      ],
      output: `describe("MyComponent", () => {})`,
    },
    {
      code: `describe("<MyComponent />", () => {})`,
      errors: [
        {
          column: 10,
          line: 1,
          messageId: "testName",
        },
      ],
      output: `describe("MyComponent", () => {})`,
    },
    {
      code: `describe(" < MyComponent /> ", () => {})`,
      errors: [
        {
          column: 10,
          line: 1,
          messageId: "testName",
        },
      ],
      output: `describe("MyComponent", () => {})`,
    },
  ],
});
