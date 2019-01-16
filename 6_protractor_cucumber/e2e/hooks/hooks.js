const { setDefaultTimeout, After } = require('cucumber');
const Page = require('../pages/page');

setDefaultTimeout(175 * 10000);

After(function() {
    return new Page().takeScreenshot(this);
});
