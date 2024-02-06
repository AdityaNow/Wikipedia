export class CreateAccountPage{

    createAccountgPageElements={
        createAccountBtn : () => cy.get('[data-mw="interface"]').get('span').contains('Create account'),
        lang : () => cy.get('#js-lang-list-button > span')
    }

    clickCreateAccountBtn(){
        this.createAccountgPageElements.createAccountBtn().should('be.visible').click();
    }
  
}

export const CreateAccount = new CreateAccountPage()