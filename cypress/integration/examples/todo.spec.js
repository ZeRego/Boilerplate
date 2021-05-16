/// <reference types="cypress" />

context('Todo', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/');
  });

  it('should create and clear todo task', () => {
    cy.findByPlaceholderText('Type new todo item').type('buy milk');
    cy.get('form').submit();
    cy.findByText('buy milk').click();
    cy.findByText('Clear checked items').click();
  });
});
