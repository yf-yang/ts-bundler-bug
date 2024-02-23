module.exports = {
  root: true,
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      parser: "@typescript-eslint/parser",
      extends: [
        "plugin:@typescript-eslint/strict-type-checked",
        "plugin:@typescript-eslint/stylistic-type-checked",
      ],
      parserOptions: {
        ecmaVersion: "latest", // differs from the default gts config
        sourceType: "module",
      },
    },
  ],
};
