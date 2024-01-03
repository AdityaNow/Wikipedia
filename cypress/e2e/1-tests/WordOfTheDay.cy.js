/// <reference types="cypress" />

import { LandingPage, VerifyPageLanding } from "../pageObjects/LandingPage";


describe('Wiktionary', () => 
{
    beforeEach(() => {
        cy.visit('/');
        cy.title().should('eq', 'Wikipedia');
        LandingPage.selectLanguage('English');
        VerifyPageLanding.englishWikiShouldBeDisplayed();
    });

    it('Word of the day', () =>
    {
        
    });    
});