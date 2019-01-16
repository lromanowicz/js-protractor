const Page = require('../pages/page');

function Home() {
	Page.call(this);
}

Home.prototype = Object.create(Page.prototype);
module.exports = new Home();