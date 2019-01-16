const {When, Then} = require('cucumber');
const expect = require('chai').expect;
const contact = require('../pages/contact');


When(/^user sends a message to "(.+?)" using "(.+?)" email$/, function(name, email) {
	return contact.sendMessage(name, email, 'Sample Message')
		.then(() => contact.takeScreenshot(this));
});

Then(/^the message should be sent successfully$/, function() {
	EXPECTED_MESSAGE = "Your message has been sent.";
	return contact.getMessageSentInfo()
		.then(message => expect(message).to.deep.eq(EXPECTED_MESSAGE));
});