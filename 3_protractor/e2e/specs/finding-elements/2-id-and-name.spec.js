const browser = require('protractor').browser;
const by = require('protractor').by;

describe('Finding elements by ID and Name attributes', function() {
    it('Should find element by ID attribute', function() {
        browser
            .findElement(by.id('header_logo'))
            .then(function(element) {
                return element.getTagName();
            })
            .then(function(tagName) {
                expect(tagName).toEqual('div');
            });
    });

    it('Should find element by Name attribute', function() {
        browser
            .findElement(by.name('submit_search'))
            .then(function(element) {
                return element.getTagName();
            })
            .then(function(tagName) {
                expect(tagName).toEqual('button');
            });
    });
});
