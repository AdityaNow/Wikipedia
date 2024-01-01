
export class LandingPage{

    static selectLanguage(lang){
        cy.get('[class="link-box"]').contains(lang).click(); //.then((response) => {expect(response.ajaxSuccess)})
    }    
}

export class VerifyLandingPage{
    
    englishWikiShouldBeDisplayed(){
        cy.get('#articlecount').should('be.visible')
        .contains(' articles in').should('be.visible')
        .contains('English');
    }

    readWikiInYourLanguageDisplayed(){
        cy.get('#js-lang-list-button > span')
        .contains('Read Wikipedia in your language')
        .should('be.visible');
    }

}
export const PageLanding = new LandingPage()
export const VerifyPageLanding = new VerifyLandingPage()