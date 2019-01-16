exports.config = {
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    specs: ['./e2e/features/*.feature'],
    capabilities: {
        browserName: 'chrome'
    },
    cucumberOpts: {
        // require step definitions
        require: ['./e2e/steps/**/*.steps.js', './e2e/hooks/*.js'],
        strict: true,
        'no-colors': true,
        format: ['node_modules/cucumber-pretty', 'json:./results/results.json']
    },
    plugins: [
        {
            package: 'protractor-multiple-cucumber-html-reporter-plugin',
            options: {
                automaticallyGenerateReport: true,
                removeExistingJsonReportFile: true
            }
        }
    ],

    onPrepare() {
        browser.baseUrl = 'http://jacekokrojek.github.io/jak-to-zrobic-w-js';
        browser.waitForAngularEnabled(false);
        browser.get(browser.baseUrl);
    },

    onComplete() {
        browser.quit();
    }
};
