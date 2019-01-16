const browser = require('protractor').browser;
const by = require('protractor').by;

describe('Finding elements by CSS and XPath locators', function() {
    it('Should find element by CSS locator', function() {
        browser
            .findElement(by.css('a[title="Women"]'))
            .then(function(element) {
                return element.getText();
            })
            .then(function(text) {
                expect(text).toEqual('WOMEN');
            });
    });

    it('Should find element by XPath locator', function() {
        browser
            .findElement(by.xpath('//a[@title="Women"]'))
            .then(function(element) {
                return element.getText();
            })
            .then(function(text) {
                expect(text).toEqual('WOMEN');
            });
    });
});
