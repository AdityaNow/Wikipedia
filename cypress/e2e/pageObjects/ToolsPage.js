export class ToolsPage{
    
    toolsElements={
        toolsDropdown : () => cy.get('#vector-page-tools-dropdown-checkbox'),
        pageTools : () => cy.get('#vector-page-tools'),
        threeHorizontalLines : () => cy.get('#vector-main-menu-dropdown-checkbox'),
        menuItems : () => cy.get('#vector-main-menu')
    }

    toolsDropdown(){
        this.toolsElements.toolsDropdown().click();        
    }

    selectAOptioFromToolsDropdown(keyword1){
        this.toolsElements.pageTools().contains(keyword1).click();
    }

    openMainMenu(){
        this.toolsElements.threeHorizontalLines().click();  //Click Three Horizontal Lines To Open Main Menu SideBar
    }

    getAllMenuItems()
    {
        this.toolsElements.menuItems().click();
    }

}


export const Tools = new ToolsPage()