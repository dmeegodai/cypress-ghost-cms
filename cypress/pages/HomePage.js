import "cypress-xpath";
import { urls } from "../support/urls";


class HomePage {

// Locators of the Home Page
  selectors = {
    header: "//header[contains(@class, 'header-area')]",
    bodyContent: "//body[contains(@class, 'home page-template page-template-page-home page-template-page')]",
    footer: "//footer[@class='footer-style-two']",
  };

  // Method to visit the homepage
  visit() {
    cy.visit(urls.homepage);
  }

  // Methods to validate the general structure
  verifyHeader() {
    cy.xpath(this.selectors.header).should("be.visible");
  }

  verifyBoadyContent() {
    cy.xpath(this.selectors.bodyContent).should("be.visible");
  }

  verifyFooter() {
    cy.xpath(this.selectors.footer).should("be.visible");
  }
}

export default new HomePage();
