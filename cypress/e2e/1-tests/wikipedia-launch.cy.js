/// <reference types="cypress" />

import { LandingPage } from "../pageObjects/LandingPage";

describe('Wikipedia', () => 
{
    beforeEach(() => {
        cy.visit('https://www.wikipedia.org');
    });

    it('Open Wikipedia', () =>
    {
        cy.title().should('eq', 'Wikipedia');
        LandingPage.selectLanguage('English');
    });    
});