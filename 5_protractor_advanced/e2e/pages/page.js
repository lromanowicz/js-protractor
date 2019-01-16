function Page() {};

Page.prototype.logEnabled = true;

Page.prototype.log = function (message) {
	if (this.logEnabled) {
		console.error.apply(console, ['DEBUG|'].concat(Array.prototype.slice.call(arguments)));
	}
};

Page.prototype.goTo = function (pageName) {
	return element(by.xpath(`//div[@class="navbar-inner"]//a[text()="${pageName}"]`)).click();
}

Page.prototype.click = function (element) {
	this.log(`Clicking element: ${element.locator()}`);
	return element.click();
}

Page.prototype.sendKeys = function (element, text) {
	this.log(`Sending "${text}" into element: ${element.locator()}`);
	element.click();
	element.clear();
	return element.sendKeys(text);
}

Page.prototype.waitForTextToBePresentInElement = function(element, text) {
	this.log(`Waiting for text "${text}" to be present in element: ${element.locator()}`);
	return browser.wait(ExpectedConditions.textToBePresentInElement(element, text), 10000);
}

module.exports = Page;