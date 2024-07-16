export class ShortenUrl{
    
    elements ={
        copyButton : () => cy.get('[class="oo-ui-labelElement-label"]').contains('Copy'),
        copiedUrlLabel : () => cy.get('[class="mw-notification-content"]').contains('URL copied to clipboard.')
    }


    clickCopy(){
        this.elements.copyButton().click();
    }
    
    urlIsShortened(){
        this.elements.copiedUrlLabel().should('be.visible')
    }

}


export const shortUrl = new ShortenUrl()