/* eslint-disable no-undef */

describe('All Tests', () => {
	beforeEach(() => {
		cy.visit('');
	});
	describe('Core Tests', () => {
		it('Successful visit & logic test', () => {
			expect(true).to.eql(true);
		});
		it('Shows title', () => {
			cy.get('h1').should('contain', 'HotelAdvisor');
		});
		it('Shows hotel cards', () => {
			cy.get('.row')
				.find('.card')
				.should('have.length', 5);
		});
	});
	describe('Sort Tests', () => {
		it('Toggles sort order', () => {
			cy.get('.App')
				.contains('asc')
				.click();
			cy.get(':nth-child(1) > .card > .card-body > p').should('contain', 1);
			cy.get(':nth-child(5) > .card > .card-body > p').should('contain', 5);
			cy.get('.App')
				.contains('desc')
				.click();
			cy.get(':nth-child(1) > .card > .card-body > p').should('contain', 5);
			cy.get(':nth-child(5) > .card > .card-body > p').should('contain', 1);
		});
	});
});
