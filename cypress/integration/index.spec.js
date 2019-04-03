/* eslint-disable no-undef */

describe('All Tests', () => {
	beforeEach(() => {
		cy.visit('');
    });
    describe('Core Tests', () => {
        it('Successful visit & logic test', () => {
            expect(true).to.eql(true)
        });
        it('Shows title', () => {
            cy.get('h1').should('contain', 'HotelAdvisor');
        });
        it('Shows hotel cards', () => {
            cy.get('.row')
                .find('.card')
                .should('have.length', 5)
        });
    });
});