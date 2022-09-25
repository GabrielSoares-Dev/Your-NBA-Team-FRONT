describe('Home', () => {
  it('Should all elements in screen', () => {
    cy.visit('http://localhost:3000/');
    cy.get('h1').contains('Monte seu Time e Torne-se Campeão');
    cy.get('p').contains('Monte sua formação dos sonhos coms os melhores jogadores da NBA!');
    cy.get('button').contains('Monte seu time');
  });
  it('Should is navigate to your team page', () => {
    cy.visit('http://localhost:3000');
    cy.get('button').contains('Monte seu time').click();

    cy.location('pathname').should('eq', '/YourTeam');
    cy.go('back');
  })
});

describe('Navbar',()=>{
  it('Should all elements in navbar', () => {
    cy.visit('http://localhost:3000');

    cy.get('p').contains('YOUR NBA TEAM');
    cy.get('button').contains('Entrar');
    cy.get('button').contains('Cadastrar-se');
  })
  it('Should is navigate to login and signup',()=>{
    cy.visit('http://localhost:3000');

    cy.get('button').contains('Entrar').click();
    cy.location('pathname').should('eq', '/Login');
    cy.go('back');
    cy.get('button').contains('Cadastrar-se').click();
    cy.location('pathname').should('eq', '/SignUp');
    cy.go('back');

  })
})

export { };
