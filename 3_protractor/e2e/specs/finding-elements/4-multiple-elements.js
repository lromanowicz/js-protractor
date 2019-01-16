const { $$, element, by } = require('protractor');

describe('Finding multiple elements', function() {
    it('Should find multiple elements', function() {
        $$('#home-page-tabs a')
            .map(el => el.getText())
            .then(textArray =>
                expect(textArray).toEqual(['POPULAR', 'BEST SELLERS'])
            );
    });

    it('Should also find multiple elements', function() {
        element
            .all(by.css('#home-page-tabs a'))
            .map(el => el.getText())
            .then(textArray =>
                expect(textArray).toEqual(['POPULAR', 'BEST SELLERS'])
            );
    });
});
