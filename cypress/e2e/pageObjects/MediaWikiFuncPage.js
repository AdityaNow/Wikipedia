export class MediaWikiFuncPage{


    mediaWikiIsLoaded(){
        
        cy.origin('https://www.mediawiki.org/wiki/MediaWiki', () =>
        {
            cy.get('title').contains('MediaWiki');
            cy.get('#firstHeading').contains('MediaWiki is a collaboration and documentation platform brought to you by a vibrant community.').should('exist').should('be.visible');
        });
    }
    
    WikiMediaIsLoaded(){
    cy.origin('https://www.wikidata.org/wiki/Q5296', () =>
        {
            cy.get('title').contains('Wikimedia main page - Wikidata');
        });
    }
}

export const MediaWiki = new MediaWikiFuncPage()