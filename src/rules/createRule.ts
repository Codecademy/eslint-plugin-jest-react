import { ESLintUtils } from "@typescript-eslint/experimental-utils";
import path from "path";

export const createRule = ESLintUtils.RuleCreator((name) => {
  const { name: ruleName } = path.parse(name);

  return `https://github.com/Codecademy/jest-react-dev-help/blob/main/docs/rules/${ruleName}.md`;
});
