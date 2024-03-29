// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
    Cypress.Commands.add('login', (username, password) => 
    {
        cy.get('[id="pt-login-2"]').click();
        cy.get('#wpName1').type(username); //ID
        cy.get('#wpPassword1').type(password);
        cy.get('#wpLoginAttempt').click();
        cy.contains('Arix120').should('be.visible');
    });
    Cypress.Commands.add('logout', () => 
    {
        cy.get('#vector-user-links-dropdown-checkbox').click();
        cy.get('[title="Log out"]').contains('Log out').should('be.visible').click();
        cy.get('#firstHeading').contains('Log out').should('be.visible');
    });
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// Record Execution
// npx cypress run --record --key 4b864b2d-a348-458c-92c7-1db00f997efe