const { browser, by } = require('protractor');

describe('Finding elements by HTML tags', function() {
    it('Should find "header" tag', function() {
        browser.get(browser.baseUrl);
        browser
            .findElement(by.tagName('header'))
            .then(function(element) {
                return element.getTagName();
            })
            .then(function(tagName) {
                expect(tagName).toEqual('header');
            });
    });
});
