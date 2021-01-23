import { TSESLint } from "@typescript-eslint/experimental-utils";

import componentDescribeName from "./rules/component-describe-name";
import noMockingReact from "./rules/no-mocking-react";

const rules = {
  "jest-react/component-describe-name": componentDescribeName,
  "jest-react/no-mocking-react": noMockingReact,
};

const rulesRecommended = Object.entries(rules).reduce<Record<string, TSESLint.Linter.RuleLevel>>(
  (accum, [ruleId, rule]) => {
    if (rule.meta.docs?.recommended) {
      accum[`jest-react/${ruleId}`] = rule.meta.docs.recommended;
    }

    return accum;
  },
  {},
);

module.exports = {
  configs: {
    recommended: {
      plugins: ["jest-react"],
      rules: rulesRecommended,
    },
  },
  rules,
};
