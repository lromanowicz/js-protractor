import {Given} from "cucumber";
import { home } from "../pages";
import { actions } from "../support";

Given(/^user opens "(.+?)" page$/, function(pageName: string) {
	return home.openPage(pageName)
		.then(() => actions.takeScreenshot(this));
});