import { AST_NODE_TYPES, TSESTree } from "@typescript-eslint/experimental-utils";

import { literalHasString } from "./nodes";

export const getJestDescribeName = (node: TSESTree.CallExpression) => {
  if (
    node.callee.type !== AST_NODE_TYPES.Identifier ||
    node.callee.name !== "describe" ||
    node.arguments.length !== 2
  ) {
    return undefined;
  }

  const [name] = node.arguments;
  return name.type === AST_NODE_TYPES.Literal && literalHasString(name) && name;
};

export const getJestMockedModule = (node: TSESTree.CallExpression) => {
  return (
    node.callee.type === AST_NODE_TYPES.MemberExpression &&
    node.callee.object.type === AST_NODE_TYPES.Identifier &&
    node.callee.object.name === "jest" &&
    node.callee.property.type === AST_NODE_TYPES.Identifier &&
    node.callee.property.name === "mock" &&
    node.arguments.length > 0 &&
    node.arguments[0].type === AST_NODE_TYPES.Literal &&
    typeof node.arguments[0].value === "string" &&
    node.arguments[0].value
  );
};
