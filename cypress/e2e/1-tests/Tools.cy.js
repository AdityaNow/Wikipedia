/// <reference types="cypress" />

import { LandingPage, VerifyPageLanding } from "../pageObjects/LandingPage";
import { Tools } from "../pageObjects/ToolsPage";
import { PagesLinkTo } from "../pageObjects/PagesLinkToPage";
import { shortUrl } from "../pageObjects/ShortUrlPage";

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
    
    it('Page Dropdown List', () =>
    {
        Tools.toolsDropdown();
        Tools.selectAOptioFromToolsDropdown('What links here');
        cy.wait(500).then(() => { PagesLinkTo.pageList(); });
        cy.wait(1500).then(() => { PagesLinkTo.getListItemsFromPage(); });
    });

    it('Main Menu Items', () => {
        Tools.openMainMenu();
        Tools.getAllMenuItems();
    });

    it('Talk Tab', () => {
        Tools.clickTalkTab();
    });

    it('Get shortened URL', () =>
        {
            Tools.toolsDropdown();
            Tools.selectAOptioFromToolsDropdown('Get shortened URL');
            cy.wait(200).then(() => { shortUrl.clickCopy(); });
            cy.wait(100).then(() => { shortUrl.urlIsShortened(); });
        });   
    
});