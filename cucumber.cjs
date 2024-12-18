module.exports = {
  default:     {
      require: ['./step_definitions/*.steps.ts'],
      paths: ['./features/*.feature'],
      requireModule: ['ts-node/register'],
      format: ['progress', 'html:report.html']
  }
};