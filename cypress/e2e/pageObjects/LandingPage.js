
export class LandingPage{

    static selectLanguage(lang){
        cy.get('[class="link-box"]').contains(lang).click();
    }

    
}

export const PageLanding = new LandingPage()