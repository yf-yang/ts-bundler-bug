module.exports = {
  extends: "../../.eslintrc.js",
  overrides: [
    {
      files: ["src/**/*.ts", "src/**/*.tsx"],
      parserOptions: {
        project: ["./tsconfig.json"],
      },
    },
  ],
};
