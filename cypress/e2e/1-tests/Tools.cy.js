/// <reference types="cypress" />

import { LandingPage, VerifyPageLanding } from "../pageObjects/LandingPage";
import { Tools } from "../pageObjects/ToolsPage";
import { PagesLinkTo } from "../pageObjects/PagesLinkToPage";

describe('Wikipedia-Tools', () => 
{
    beforeEach(() => {
        cy.visit('/');
        cy.title().should('eq', 'Wikipedia');
        LandingPage.selectLanguage('English');
        VerifyPageLanding.englishWikiShouldBeDisplayed();
    });

    it('What links here', () =>
    {
        Tools.toolsDropdown();
        Tools.selectAOptioFromToolsDropdown('What links here');
    });   
    
    it.only('Page Dropdown List', () =>
    {
        Tools.toolsDropdown();
        Tools.selectAOptioFromToolsDropdown('What links here');
        cy.wait(500)
        PagesLinkTo.pageList();
        PagesLinkTo.getListItemsFromPage()
    });
    
});