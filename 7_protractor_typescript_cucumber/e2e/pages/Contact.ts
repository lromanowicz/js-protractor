import { $ } from "protractor";
import { actions } from "../support";

class Contact {
	private nameInput = $('#name');
	private emailInput = $('#email');
	private messageInput = $('#content');
	private submitButton = $('button.btn');
	private messageSentInfo = $('span.message');
	

	public sendMessage(
		name: string,
		email: string,
		message: string
	) {
		return actions.sendKeys(this.nameInput, name)
			.then(() => actions.sendKeys(this.emailInput, email))
			.then(() => actions.sendKeys(this.messageInput, message))
			.then(() => actions.click(this.submitButton));
	}

	public getMessageSentInfo() {
		return this.waitForMessageToBeSent()
			.then(() => actions.getText(this.messageSentInfo));
	}

	private waitForMessageToBeSent() {
		return actions.waitForText(this.messageSentInfo, 'Your message has been sent.');
	}
}

const contact = new Contact();
export = contact;