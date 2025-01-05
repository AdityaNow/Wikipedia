/// <reference types="cypress" />

import { OtherObj } from "../pageObjects/OtherObjectsFuncPage";

describe("Footer", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.title().should("eq", "Wikipedia");
  });

  it("Other Objects Navigation Links", () => {
    OtherObj.check_all_footer_nav();
  });
});
