const { Given } = require('cucumber');
const home = require('../pages/home');

Given(/^user opens "(.+?)" page$/, function(pageName) {
	return home.goTo(pageName)
		.then(() => home.takeScreenshot(this));
});
