const { $, element, by, browser } = require('protractor');

describe('Interaction with located web elements', function() {
    it('Should click() on located element', function() {
        element(by.xpath('//a[text()="Services"]'))
            .click()
            .then(() => $('h1').getText())
            .then(text => expect(text).toEqual('Services'));
    });

    it('Should sendKeys() into located input element', function() {
        element(by.xpath('//a[text()="Contact"]'))
            .click()
            .then(() => $('#name').sendKeys('John Travolta'))
            .then(() => $('#name').getAttribute('value'))
            .then(value => expect(value).toEqual('John Travolta'));
    });

    it('Should clear() located input element', function() {
        element(by.xpath('//a[text()="Contact"]'))
            .click()
            .then(() => $('#name').sendKeys('John Travolta'))
            .then(() => $('#name').clear())
            .then(() => $('#name').getAttribute('value'))
            .then(value => expect(value).toEqual(''));
    });

    it('Should submit the form', function() {
        element(by.xpath('//a[text()="Contact"]'))
            .click()
            .then(() => $('#name').sendKeys('John Travolta'))
            .then(() => $('#email').sendKeys('testemail@testor.com'))
            .then(() => $('#content').sendKeys('Sample message'))
            .then(() => $('button.btn').click())
            .then(() => browser.sleep(7000))
            .then(() => $('span.message').getText())
            .then(text => expect(text).toEqual('Your message has been sent.'));
    });
});
