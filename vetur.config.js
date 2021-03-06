module.exports = {
  settings: {
    "vetur.useWorkspaceDependencies": true,
    "vetur.experimental.templateInterpolationService": false,
  },
  projects: [
    "./applications/dml",
    "./applications/dsv",
    "./packages/type-utils",
    "./packages/mock-service",
    "./packages/lru-cache",
    "./components/comm-components",
    "./components/comm-search",
  ],
};
