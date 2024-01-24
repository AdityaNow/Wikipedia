/// <reference types="cypress" />

import { LandingPage, VerifyPageLanding } from "../pageObjects/LandingPage";
import { Tools } from "../pageObjects/ToolsPage";
import { wordDaily } from "../pageObjects/WordOfTheDayPage";


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
        Tools.toolsDropdown();
        Tools.selectAOptioFromToolsDropdown('Wiktionary');
        cy.wait(500);
        wordDaily.wordofDayPresent();
    });    
});