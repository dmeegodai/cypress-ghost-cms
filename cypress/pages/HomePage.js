import "cypress-xpath";
import { urls } from "../support/urls";

class HomePage {
  // Locators of the Home Page
  selectors = {
    header: "#shopify-section-header",
    bodyContent: "#shopify-section-1632757703d43adf55",
    footer: ".footer_right",
    gdprButton: ".ecom-accept-gdpr",
    brandLogo: "//img[@class='header__logo']",
    newsletterTextOne: "#ecom_free_shipping_margin",
    newsletterTextTwo:
      "//div[@class='announcement-bar__content']/a[@class='color-inherit' and contains(text(), 'Subscribe to our Newsletter and get')]",
  };

  // Method to visit the homepage
  visit() {
    cy.visit(urls.homepage);
  }

  // Methods to validate the general structure
  verifyHeader() {
    cy.get(this.selectors.header).should("be.visible");
  }

  verifyBodyContent() {
    cy.get(this.selectors.bodyContent).should("be.visible");
  }

  verifyFooter() {
    cy.get(this.selectors.footer).should("be.visible");
  }

  clickModelContentButton() {
    cy.get(this.selectors.gdprButton).click();
  }

  verifyBrandLogo() {
    cy.xpath(this.selectors.brandLogo).should("be.visible");
  }

  clickNewsletterTexts() {
    cy.get(this.selectors.newsletterTextOne).then(($el) => {
      if ($el.length > 0 && $el.is(":visible")) {
        cy.wrap($el).click();
      } else {
        cy.xpath(this.selectors.newsletterTextTwo).then(($el) => {
          if ($el.length > 0 && $el.is(":visible")) {
            cy.wrap($el).click();
          }
        });
      }
    });
  }
}

export default new HomePage();
