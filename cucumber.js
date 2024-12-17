export default {
     default: {
       require: ["features/**/*.ts"],
       format: ["progress", "json:report.json"],
       paths: ["features/**/*.feature"]
     }
   };