import { getJestMockedModule } from "../utils/jest";
import { createRule } from "./createRule";

type Options = [
  {
    modules: string[];
  },
];

type MessageIds = "mockReact";

export default createRule<Options, MessageIds>({
  create(context, [options]) {
    const bannedModules = new Set(["react", ...options.modules]);

    return {
      CallExpression(node) {
        const mockedModule = getJestMockedModule(node);

        if (mockedModule && bannedModules.has(mockedModule)) {
          context.report({
            messageId: "mockReact",
            data: { mockedModule },
            node,
          });
        }
      },
    };
  },
  defaultOptions: [
    {
      modules: [],
    },
  ],
  meta: {
    docs: {
      category: "Best Practices",
      description: "Prevents using jest.mock to mock out core React packages",
      recommended: "error",
    },
    messages: {
      mockReact:
        "Avoid mocking {{ mockedModule }}; instead, test the external behavior of components that use it.",
    },
    type: "problem",
    schema: [
      {
        properties: {
          modules: {
            items: {
              type: "string",
            },
            type: "array",
          },
        },
        type: "object",
      },
    ],
  },
  name: "no-mocking-react",
});
