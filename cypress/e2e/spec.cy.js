/* eslint-disable */
describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('/');
    cy.get('#petList')
      .find('.card-img')
      .should(($a) => {
        expect($a).to.have.length(6);
      });
  });
});
