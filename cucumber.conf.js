const fs = require('fs');
let count = 0;

const {
  setDefaultTimeout, After, AfterAll, Before, BeforeAll
} = require('cucumber');
const {
  createSession,
  closeSession,
  startWebDriver,
  stopWebDriver,
  getNewScreenshots,
} = require('nightwatch-api');

const reporter = require('cucumber-html-reporter');

setDefaultTimeout(60000);

BeforeAll(async () => {
  await startWebDriver({ env: 'default' });
});

Before(async () => {
  if (count !== 0) {
    await closeSession();
    await stopWebDriver();
  }
  await startWebDriver();
  await createSession();
});

AfterAll(async () => {
  setTimeout(() => {
    reporter.generate({
      theme: 'bootstrap',
      jsonFile: 'report/cucumber_report.json',
      output: 'report/cucumber_report.html',
      reportSuiteAsScenarios: true,
      launchReport: false,
      metadata: {
        'App Version': '0.3.2',
        'Test Environment': 'POC',
      },
    });
  }, 1000);
});

After(function () {
  getNewScreenshots().forEach((file) => this.attach(fs.readFileSync(file), 'image/png'));
  count = +1;
});
