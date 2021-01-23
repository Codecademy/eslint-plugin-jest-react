import { TSESTree } from "@typescript-eslint/experimental-utils";

export type LiteralWithString = TSESTree.Literal & {
  value: string;
};

export const literalHasString = (node: TSESTree.Literal): node is LiteralWithString =>
  typeof node.value === "string";
