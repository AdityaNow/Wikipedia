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
    });    
});