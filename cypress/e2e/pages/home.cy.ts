describe('Test tela', () => {
  it('veja', () => {
    cy.visit('http://localhost:3000/');
    cy.get('h1').contains('test');
  });
});

export {};
