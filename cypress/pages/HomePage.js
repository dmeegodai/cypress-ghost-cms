import "cypress-xpath";

Cypress.on('uncaught:exception', (err, runnable) => {
    // Returning false here prevents Cypress from failing the test
    return false;
  });

class HomePage {
  // General structure
  selectors = {
    header: "//header[contains(@class, 'main-header')]",
    bodyContent: "//div[@class='layout-content container-fluid main-body-wrapper']",
    footer: "//div[contains(text(), 'Explore and Shop')]",
  };

  // Method to visit the homepage
  visit() {
    cy.visit("https://www.dialog.lk/");
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
