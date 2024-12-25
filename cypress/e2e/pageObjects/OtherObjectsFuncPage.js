export class OtherObjectsPage {
  
  otherObjectsElements = {
    otherObjNav: () => cy.get(".other-projects").find("div").find("a"),
    pageTools: () => cy.get("#vector-page-tools"),
    expectedHrefs: [
      "//commons.wikimedia.org/",
      "//www.wikivoyage.org/",
      "//www.wiktionary.org/",
      "//www.wikibooks.org/",
      "//www.wikinews.org/",
      "//www.wikidata.org/",
      "//www.wikiversity.org/",
      "//www.wikiquote.org/",
      "//www.mediawiki.org/",
      "//www.wikisource.org/",
      "//species.wikimedia.org/",
      "//www.wikifunctions.org/",
      "//meta.wikimedia.org/",
    ],
  };

  check_all_footer_nav() {
    this.otherObjectsElements.otherObjNav().each(($el) => {
      // Assert that the href exists and matches the expected value
      cy.wrap($el)
        .should("have.attr", "href")
        .then((href) => {
          // Check that the href is included in the expected list
          expect(this.otherObjectsElements.expectedHrefs).to.include(href);
        });
    });
  }
}

export const OtherObj = new OtherObjectsPage();