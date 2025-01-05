export class CreateAccountPage {
  createAccountgPageElements = {
    createAccountBtn: () =>
      cy.get('[data-mw="interface"]').get("span").contains("Create account"),
    usernameLabel: () => cy.get('[for="wpName2"]').contains("Username"),
    usernameInput: () =>
      cy.get('[id="wpName2"][placeholder="Enter your username"]'),
    usernameError: () => cy.get('[class="cdx-message__content"]'),
    passwordLabel: () => cy.get('[for="wpPassword2"]').contains("Password"),
    passwordInput: () =>
      cy.get('[id="wpPassword2"]', '[placeholder="Enter a password"]'),
    retypePasswordInput: () =>
      cy.get('[id="wpRetype"]', '[placeholder="Enter password again"]'),
  };

  clickCreateAccountBtn() {
    this.createAccountgPageElements
      .createAccountBtn()
      .should("be.visible")
      .click();
  }

  usernameLabelIsPresent() {
    this.createAccountgPageElements.usernameLabel().should("be.visible");
  }

  enterUsername(userNameInput) {
    this.createAccountgPageElements
      .usernameInput()
      .should("be.enabled")
      .type(userNameInput);
  }

  catchUsernameError() {
    this.createAccountgPageElements
      .usernameError()
      .contains(
        "Username entered already in use. Please choose a different name."
      );
  }

  passwordLabelIsPresent() {
    this.createAccountgPageElements.passwordLabel().should("be.visible");
  }

  enterPassword(passwordInput) {
    this.createAccountgPageElements
      .passwordInput()
      .should("be.enabled")
      .type(passwordInput);
  }

  retypePassword(passwordInput) {
    this.createAccountgPageElements
      .retypePasswordInput()
      .should("be.enabled")
      .type(passwordInput);
  }
}

export const CreateAccount = new CreateAccountPage();
