export class ToolsPage{
    
    toolsDropdown(){
        cy.get('#vector-page-tools-dropdown-checkbox').click();        
    }

    selectAOptioFromToolsDropdown(keyword1){
        cy.get('#vector-page-tools').contains(keyword1).click();
    }


}


export const Tools = new ToolsPage()