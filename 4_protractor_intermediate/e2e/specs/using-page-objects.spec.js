const home = require('../pages/home');
const services = require('../pages/services');
const blog = require('../pages/blog');

describe('Using page objects in tests', function() {
    it('Should be possible to open Service page', function() {
        home.goTo('Services');
        expect(services.getTitle()).toEqual('Services');
    });

    it('Should be possible to open Blog page', function() {
        const EXPECTED_TITLE =
            'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour';
        home.goTo('Blog');
        expect(blog.getArticleTitleByIdx(0)).toEqual(EXPECTED_TITLE);
    });

    //Excercise!!
    //Create contact.js page object
    //Then create a test for a successful sending of message!
});
