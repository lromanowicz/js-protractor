import { browser, element, by } from "protractor";

class Home {
	public navigateTo(url: string = "") {
		return browser.get(browser.baseUrl + url);
	}

	public openPage(pageName: string) {
		return element(
			by.xpath(`//div[@class="navbar-inner"]//a[text()="${pageName}"]`)
		).click();
	}
}

const home = new Home();
export = home;