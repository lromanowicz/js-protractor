const {element, by} = require('protractor');

function Home() {
	Page.call(this);
	this.goTo = function (pageName) {
		return element(by.xpath(`//div[@class="navbar-inner"]//a[text()="${pageName}"]`)).click();
	}
}

module.exports = new Home();