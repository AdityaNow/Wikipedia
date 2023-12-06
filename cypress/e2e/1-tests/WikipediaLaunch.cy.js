/// <reference types="cypress" />

import { LandingPage, VerifyPageLanding } from "../pageObjects/LandingPage";

describe('Wikipedia', () => 
{
    beforeEach(() => {
        cy.visit('https://www.wikipedia.org');
    });

    it('Open Wikipedia', () =>
    {
        cy.title().should('eq', 'Wikipedia');
        LandingPage.selectLanguage('English');
        VerifyPageLanding.englishWikiShouldBeDisplayed();
    });    
});