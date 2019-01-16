const { browser } = require('protractor');
// import { browser } from "protractor";

describe('Protractor demo', function() {
    it('Should open google.pl', function() {
        browser.get('https://www.google.pl');
        expect(browser.getTitle()).toEqual('Google');
    });
});
