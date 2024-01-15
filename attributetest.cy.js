describe('The attribute time selector test', () => {


it('Select using an attribute', () =>{

cy.visit('https://www.google.com');

cy.get('#L2AGLb').click();

cy.get('[alt="Google"]').should('be.visible');


})

})
