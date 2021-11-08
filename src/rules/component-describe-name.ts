import { getJestDescribeName } from "../utils/jest";
import { createRule } from "./createRule";

export default createRule({
  create(context) {
    return {
      CallExpression(node) {
        const blockName = getJestDescribeName(node);

        if (blockName && /^\s*\<\s*\w+\s*\/?\s*\>$/.test(blockName.value.trim())) {
          context.report({
            fix: (fixer) => {
              return fixer.replaceTextRange(
                [blockName.range[0] + 1, blockName.range[1] - 1],
                blockName.value.replace(/\W+/g, ""),
              );
            },
            messageId: "testName",
            node: blockName,
          });
        }
      },
    };
  },
  defaultOptions: [],
  meta: {
    docs: {
      description:
        "Keeps the name passed to describe() blocks just a component name, without JSX markup",
      recommended: "error",
    },
    fixable: "code",
    messages: {
      testName:
        "Match this describe() block description to just the component's name, without JSX markup.",
    },
    type: "suggestion",
    schema: [],
  },
  name: "component-describe-name",
});
