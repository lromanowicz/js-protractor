const {$} = require('protractor');

function Services() {
	this.title = $('div > h1');

	this.getTitle = function() {
		return this.title.getText();
	}
}

module.exports = new Services();