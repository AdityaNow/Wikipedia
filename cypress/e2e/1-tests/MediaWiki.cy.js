/// <reference types="cypress" />

import { LandingPage, VerifyPageLanding } from "../pageObjects/LandingPage";
import { MediaWiki } from "../pageObjects/MediaWikiFuncPage";
import { Tools } from "../pageObjects/ToolsPage";

describe("Wikipedia-Tools", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.title().should("eq", "Wikipedia");
    LandingPage.selectLanguage("English");
    VerifyPageLanding.englishWikiShouldBeDisplayed();
    Tools.toolsDropdown();
  });

  it("What links here", () => {
    Tools.selectAOptioFromToolsDropdown("MediaWiki");
    MediaWiki.mediaWikiIsLoaded();
  });
});
