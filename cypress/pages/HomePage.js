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
    searchBoxPlaceholder:
      "//input[@placeholder='Search the tea world of Dilmah']",
    searchIcon: ".icon-search",
    searchButton: ".input-group-append",
    closeCookie: ".close-cookie",
  };

  // Method to visit the shop-homepage
  shopVisit() {
    cy.visit(urls.shophomepage);
  }

  // Method to visit the homepage
  homeVisit() {
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

  // Methods to validate the search feild
  verifySearchPlaceholderText() {
    cy.xpath(this.selectors.searchBoxPlaceholder).should("be.visible");
  }
  verifySerachIcon() {
    cy.get(this.selectors.searchIcon).should("be.visible");
  }
  verifySearchButton() {
    cy.get(this.selectors.searchButton).should("exist");
  }
  enterSearchText(searchText) {
    cy.xpath(this.selectors.searchBoxPlaceholder).type(searchText);
  }
  searchButtonAction() {
    cy.get(this.selectors.searchButton).click();
  }
  closeCookiePopupVisibility() {
    cy.get(this.selectors.closeCookie, {timeout: 10000}).should("be.visible");
  }
  closeCookiePopup() {
    cy.get(this.selectors.closeCookie).click();
  }
}

export default new HomePage();
