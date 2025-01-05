/// <reference types="cypress" />

import { LandingPage, VerifyPageLanding } from "../pageObjects/LandingPage";
import "F:/cypress/wikiV2/Wikipedia/cypress/support/commands";

describe("Wikipedia", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Open Wikipedia", () => {
    cy.title().should("eq", "Wikipedia");
    VerifyPageLanding.readWikiInYourLanguageDisplayed();
    LandingPage.selectLanguage("English");
    VerifyPageLanding.englishWikiShouldBeDisplayed();
  });

  it("Login Logout", () => {
    cy.title().should("eq", "Wikipedia");
    LandingPage.selectLanguage("English");
    cy.login("Arix120", "passwordToEnterHere");
    cy.logout();
  });
});