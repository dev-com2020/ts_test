module.exports = {
     default: {
          require: ["features/**/*.ts"],
          format: ["progress", "json:report.json"],
          paths: ["features/**/*.feature"],
          publishQuiet: true
     }
};