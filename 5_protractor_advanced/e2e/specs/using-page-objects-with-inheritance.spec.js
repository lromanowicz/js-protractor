const home = require('../pages/home');
const services = require('../pages/services');
const blog = require('../pages/blog');
const contact = require('../pages/contact');

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

    it('Should successfully send a message', function() {
        const EXPECTED_INFO = 'Your message has been sent.';

        home.goTo('Contact');
        contact.sendMessage('Name', 'email@randommail.com', 'Sample message');

        expect(contact.getMessageSentInfo()).toEqual(EXPECTED_INFO);
    });
});
