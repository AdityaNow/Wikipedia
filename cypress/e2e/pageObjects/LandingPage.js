export class LandingPage{

    static landingPageElements={
        selectLanguageLink : () => cy.get('[class="link-box"]')
    }

    static selectLanguage(lang){
        this.landingPageElements.selectLanguageLink().contains(lang).click(); //.then((response) => {expect(response.ajaxSuccess)})
    }    
}

export class VerifyLandingPage{
    
    verifyLandingPageElements={
        articleCount : () => cy.get('#articlecount'),
        lang : () => cy.get('#js-lang-list-button > span')
    }

    englishWikiShouldBeDisplayed(){
        this.verifyLandingPageElements.articleCount().should('be.visible')
        .contains(' articles in').should('be.visible')
        .contains('English');
    }

    readWikiInYourLanguageDisplayed(){
        
        this.verifyLandingPageElements.lang().contains('Read Wikipedia in your language')
        .should('be.visible');
    }

}
export const PageLanding = new LandingPage()
export const VerifyPageLanding = new VerifyLandingPage()