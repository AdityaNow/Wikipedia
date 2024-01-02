export class PagesLinkToPage{
    
    pageLinkElements={
        pageListEle : () => cy.get('#ooui-php-1'),
        getListItemsEle : () => cy.get('.mw-widget-titleOptionWidget')
    }

    pageList(){
        this.pageLinkElements.pageListEle().click();        
    }

    getListItemsFromPage(keyword1){
        this.pageLinkElements.getListItemsEle();
    }
}


export const PagesLinkTo = new PagesLinkToPage()