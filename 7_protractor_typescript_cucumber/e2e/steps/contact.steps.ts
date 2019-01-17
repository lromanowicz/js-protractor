import { When, Then } from 'cucumber';
import { contact } from '../pages';
import {expect} from 'chai';
import { actions } from '../support';

When(/^user sends a message to "(.+?)" using "(.+?)" email$/, function(
    name: string,
    email: string
) {
	return contact.sendMessage(name, email, 'Sample message')
		.then(() => actions.takeScreenshot(this));
});

Then(/^the message should be sent successfully$/, function() {
	const EXPECTED_INFO = "Your message has been sent.";
	return contact.getMessageSentInfo()
		.then(info => expect(info).to.deep.eq(EXPECTED_INFO));
});
