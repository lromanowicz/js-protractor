const {$} = require('protractor');
const Page = require('../pages/page')

function Services() {
	Page.call(this);

	this.title = $('div > h1');

	this.getTitle = function() {
		return this.title.getText();
	}
}

Services.prototype = Object.create(Page.prototype);
module.exports = new Services();