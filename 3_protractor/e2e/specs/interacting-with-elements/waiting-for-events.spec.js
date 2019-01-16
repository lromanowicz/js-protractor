const { browser, ExpectedConditions, element} = require('protractor');

describe('Waiting for special events', function() {
    it('Should wait until element is visible', function() {
        element(by.xpath('//a[text()="Contact"]'))
            .click()
            .then(() => $('#name').sendKeys('John Travolta'))
            .then(() => $('#email').sendKeys('testemail@testor.com'))
            .then(() => $('#content').sendKeys('Sample message'))
            .then(() => $('button.btn').click())
            .then(() => browser.wait(ExpectedConditions.textToBePresentInElement($('span.message'), 'Your message has been sent.'), 20000))
            .then(() => $('span.message').getText())
            .then(text => expect(text).toEqual('Your message has been sent.'));
    });
});
