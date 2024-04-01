export class ToolsPage{

    toolsElements={
        toolsDropdown : () => cy.get('#vector-page-tools-dropdown-checkbox'),
        pageTools : () => cy.get('#vector-page-tools'),
        threeHorizontalLines : () => cy.get('#vector-main-menu-dropdown-checkbox'),
        menuItems : () => cy.get('#vector-main-menu'),
        talkTab : () => cy.get('#ca-talk'),
        talkHeading : () => cy.get('#firstHeading')
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
        this.toolsElements.menuItems().then((listMI) => {
                let currentEvents = "";
                let Contents = "";
                let RandomArticle = "";
                let AboutWikipedia = "";
                let ContactUs = "";
                let Donate = "";
                let Help = "";
                let LearnToEdit = "";
                let CommunityPortal = "";
                let RecentChanges = "";
                let UploadFile = "";

                cy.wrap(listMI).contains('Main page').should('exist').should('be.visible');
                cy.wrap(listMI).contains('Contribute').should('exist').should('be.visible');
                cy.readFile('cypress/fixtures/main-menu-cy-data.json').then((data) => {
                    // Access the value of the "CurrentEvents" key
                    currentEvents = data.CurrentEvents;
                    Contents = data.Contents;
                    RandomArticle = data.RandomArticle;
                    AboutWikipedia = data.AboutWikipedia;
                    ContactUs = data.ContactUs;
                    Donate = data.Donate;
                
                cy.wrap(listMI).contains(currentEvents).should('exist').should('be.visible');
                cy.wrap(listMI).contains(Contents).should('exist').should('be.visible');
                cy.wrap(listMI).contains(RandomArticle).should('exist').should('be.visible');
                cy.wrap(listMI).contains(AboutWikipedia).should('exist').should('be.visible');
                cy.wrap(listMI).contains(ContactUs).should('exist').should('be.visible');
                cy.wrap(listMI).contains(Donate).should('exist').should('be.visible');

                    Help = data.Help;
                    LearnToEdit = data.LearnToEdit;
                    CommunityPortal = data.CommunityPortal;
                    RecentChanges = data.RecentChanges;
                    UploadFile = data.UploadFile;

                cy.wrap(listMI).contains(Help).should('exist').should('be.visible');
                cy.wrap(listMI).contains(LearnToEdit).should('exist').should('be.visible');
                cy.wrap(listMI).contains(CommunityPortal).should('exist').should('be.visible');
                cy.wrap(listMI).contains(RecentChanges).should('exist').should('be.visible');
                cy.wrap(listMI).contains(UploadFile).should('exist').should('be.visible');

                });


            }
        );
    }

    clickTalkTab()
    {
        this.toolsElements.talkTab().should('exist').click();
        this.toolsElements.talkHeading().as('talkHeadings')
        cy.get('@talkHeadings').contains('Talk');
        cy.get('@talkHeadings').contains(':');
        cy.get('@talkHeadings').contains('Main Page');
    }

}


export const Tools = new ToolsPage()