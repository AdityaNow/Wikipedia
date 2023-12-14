export class CommonFunctions{
    
    toSearch(keyword){
        cy.get('#searchInput').type(keyword);
        cy.get('.cdx-search-input__end-button').click();
        
    }
    verifySearchResultUrl(keyword1){
        cy.url().should('eq', keyword1);
    }


}


export const CommonFunc = new CommonFunctions()