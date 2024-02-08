/// <reference types="cypress" />

import  { CreateAccount } from "../pageObjects/CreateAccountPage";
import  { LandingPage, VerifyPageLanding } from "../pageObjects/LandingPage";

describe('Create Account', () => 
{
    beforeEach(() => {
        cy.visit('/');
        cy.title().should('eq', 'Wikipedia');
        LandingPage.selectLanguage('English');
        VerifyPageLanding.englishWikiShouldBeDisplayed();
    });

    it('Create Account Fields', () =>
    {
        CreateAccount.clickCreateAccountBtn();
        CreateAccount.usernameLabelIsPresent();
        CreateAccount.enterUsername("user1");
        cy.wait(1000);
        CreateAccount.enterUsername("{selectAll}{backspace}");
        CreateAccount.enterUsername("user12345678909999");
        CreateAccount.catchUsernameError();
        CreateAccount.passwordLabelIsPresent();
        CreateAccount.enterPassword("Jq@l1945");
        CreateAccount.retypePassword("Jq@l1945");
    });    
});