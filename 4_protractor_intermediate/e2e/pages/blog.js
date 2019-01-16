const {$$} = require('protractor');

function Blog() {
	this.articleTitles = $$('div > h2');

	this.getArticleTitleByIdx = function(idx) {
		return this.articleTitles.get(idx).getText();
	}
}

module.exports = new Blog();