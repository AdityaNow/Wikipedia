
export class LandingPage{

    static selectLanguage(lang){
        cy.get('[class="link-box"]').contains(lang).click();
    }    
}

export class VerifyLandingPage{
    
    englishWikiShouldBeDisplayed(){
        cy.get('#articlecount').should('be.visible')
        .contains(' articles in').should('be.visible')
        .contains('English');
    }

}
export const PageLanding = new LandingPage()
export const VerifyPageLanding = new VerifyLandingPage()