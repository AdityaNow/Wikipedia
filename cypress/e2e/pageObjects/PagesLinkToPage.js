export class PagesLinkToPage{
    
    pageList(){
        cy.get('#ooui-php-1').click();        
    }

    getListItemsFromPage(keyword1){
        cy.get('.mw-widget-titleOptionWidget')
    }


}


export const PagesLinkTo = new PagesLinkToPage()