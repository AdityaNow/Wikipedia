/// <reference types="cypress" />

import { LandingPage, VerifyPageLanding } from "../pageObjects/LandingPage";
import { CommonFuncPage } from "../pageObjects/CommonFunc";

let KEYWORD = 'Sachin Tendulkar';
let KEYWORD_URL = 'https://en.wikipedia.org/wiki/Sachin_Tendulkar';


describe('Wikipedia', () => 
{
    beforeEach(() => {
        cy.visit('/');
        cy.title().should('eq', 'Wikipedia');
        LandingPage.selectLanguage('English');
        VerifyPageLanding.englishWikiShouldBeDisplayed();
    });

    it('Search Sachin Tendulkar', () =>
    {
        CommonFuncPage.toSearch(KEYWORD);
        CommonFuncPage.verifySearchResultUrl(KEYWORD_URL);
    });    
});