exports.config = {
    framework: 'jasmine',
    specs: ['./e2e/specs/interacting-with-elements/waiting-for-events.spec.js'],
    capabilities: {
        browserName: 'chrome'
    },

    onPrepare() {
        browser.baseUrl = 'http://jacekokrojek.github.io/jak-to-zrobic-w-js';
        browser.waitForAngularEnabled(false);
        browser.get(browser.baseUrl);
    },

    onComplete() {
        browser.quit();
    }
};
