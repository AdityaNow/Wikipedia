/// <reference types="cypress" />

import { LandingPage, VerifyPageLanding } from "../pageObjects/LandingPage";
import { CommonFunc } from "../pageObjects/CommonFunc";

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
        CommonFunc.toSearch(KEYWORD);
        CommonFunc.verifySearchResultUrl(KEYWORD_URL);
    });    
});