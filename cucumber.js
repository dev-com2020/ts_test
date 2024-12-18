export default {
  default: [
    "--require-module ts-node/register",
    "--require ./features/step_definitions/**/*.ts",
    "--format progress",
    "--publish-quiet"
  ],
};
