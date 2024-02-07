export class CreateAccountPage{

    createAccountgPageElements={
        createAccountBtn : () => cy.get('[data-mw="interface"]').get('span').contains('Create account'),
        usernameLabel : () => cy.get('[for="wpName2"]').contains('Username'),
        usernameInput : () => cy.get('[id="wpName2"][placeholder="Enter your username"]'),
        passwordLabel : () => cy.get('[for="wpPassword2"]').contains('Password'),
    }

    clickCreateAccountBtn(){
        this.createAccountgPageElements.createAccountBtn().should('be.visible').click();
    }

    usernameLabelIsPresent(){
        this.createAccountgPageElements.usernameLabel().should('be.visible');
    }

    enterUsername(userNameInput){
        this.createAccountgPageElements.usernameInput().should('be.enabled').type(userNameInput);
    }

    passwordLabelIsPresent(){
        this.createAccountgPageElements.passwordLabel().should('be.visible');
    }

  
}

export const CreateAccount = new CreateAccountPage()