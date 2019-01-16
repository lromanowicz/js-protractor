const Page = require('../pages/page');

function Contact() {
	Page.call(this);
	this.nameInput = $('#name');
	this.emailInput = $('#email');
	this.messageInput = $('#content');
	this.submitButton = $('button.btn');
	this.messageSentInfo = $('span.message');


	this.sendMessage = function(name, email, message) {
		this.sendKeys(this.nameInput, name);
		this.sendKeys(this.emailInput, email);
		this.sendKeys(this.messageInput, message);
		return this.click(this.submitButton);
	}

	this.getMessageSentInfo = function() {
		this.waitForTextToBePresentInElement(this.messageSentInfo, "Your message has been sent.")
		return this.messageSentInfo.getText();
	}
}

Contact.prototype = Object.create(Page.prototype);
module.exports = new Contact();

