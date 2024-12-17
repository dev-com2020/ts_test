export default {
  default: {
    import: [
      "esm",                       // Rejestracja obsługi ES modułów
      "ts-node/register",          // Rejestracja obsługi TypeScript
      "features/steps/**/*.ts"     // Ładowanie plików kroków
    ],
    format: ["progress", "json:report.json"],
    paths: ["features/**/*.feature"]
  }
};