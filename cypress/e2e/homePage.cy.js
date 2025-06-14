import HomePage from "../pages/HomePage";
import { testData } from "../data/testData";

describe("Dilmah Page Test - General Structure Validation", () => {
  // Setup step: Navigate to the homepage before tests
  beforeEach(() => {
    HomePage.shopVisit();
    HomePage.clickModelContentButton();
  });

  //  Test case 1: Verify the main element is visible
  it("Should verify the home page header, body and footer", () => {
    cy.eyesOpen({
      appName: 'Dilmah Website',
      testName: 'Home Page Layout Validation'
    });
    HomePage.verifyHeader();
    HomePage.verifyBodyContent();
    HomePage.verifyFooter();
    // Final assertion: Verify the brand logo is visible
    HomePage.verifyBrandLogo();
  });
});

describe("Dilmah Landing Page - Validation Tests", () => {
  beforeEach(() => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    HomePage.shopVisit();
    HomePage.clickModelContentButton();
  });
  it("Should verify the newsletter banner on navigator menu", () => {
    HomePage.clickNewsletterTexts();
  });
});

describe("Dilmah Top Header -Validation Tests", () => {
  beforeEach(() => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    HomePage.homeVisit();
  });
  it("Should verify the search section of the header", () => {
    HomePage.verifySearchPlaceholderText();
    HomePage.verifySerachIcon();
    HomePage.verifySearchButton();
  });
  it("Should verify the search action of the field", () => {
    HomePage.enterSearchText("Tea");
    HomePage.searchButtonAction();
    HomePage.closeCookiePopupVisibility();
    HomePage.closeCookiePopup();
  });
  it("Should verify the Dilmah Online button", () => {
    HomePage.verifyDilmahOnlineButtonPresent(); 
    HomePage.verifyDilmahOnlineButtonClick();
  });
  it("Should verify the Dilmah Careers button", () => {
    HomePage.verifyDilmahCareersButtonPresent(); 
    HomePage.verifyDilmahCareersButtonClick();
  });
  it("Should verify the Shop Online button", () => {
    HomePage.verifyDilmahShopOnlineButtonPresent();
    HomePage.verifyDilmahShopOnlineButtonClick();
  });

});




