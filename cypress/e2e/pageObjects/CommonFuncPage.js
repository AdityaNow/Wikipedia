export class CommonFunctions {
  elements = {
    searchVector: () => cy.get('[href="/wiki/Special:Search"]'),
    searchInput: () => cy.get("#searchInput"),
    searchBtn: () => cy.get(".cdx-search-input__end-button"),
  };

  toSearch(keyword) {
    this.elements
      .searchVector()
      .click()
      .then(() => {
        this.elements.searchInput().type(keyword);
      });
    this.elements.searchBtn().click();
  }

  verifySearchResultUrl(keyword1) {
    cy.url().should("eq", keyword1);
  }
}

export const CommonFunc = new CommonFunctions();
