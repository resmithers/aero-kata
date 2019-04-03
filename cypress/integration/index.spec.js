/* eslint-disable no-undef */

describe('All Tests', () => {
	beforeEach(() => {
		cy.visit('');
    });
    describe('Core Tests', () => {
        it('Successful visit & logic test', () => {
            expect(true).to.eql(true)
        });
    });
});
