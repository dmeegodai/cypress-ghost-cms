import HomePage from "../pages/HomePage";
import { testData } from "../data/testData";

describe("Dilmah Page Test - General Structure Validation", () => {
  // Setup step: Navigate to the homepage before tests
  beforeEach(() => {
    HomePage.visit();
    HomePage.clickModelContentButton();
  });

  //  Test case 1: Verify the header is visible
  it("Should verify the home page header, body and footer", () => {
    HomePage.verifyHeader();
    HomePage.verifyBodyContent();
    HomePage.verifyFooter();
     // Final assertion: Verify the brand logo is visible 
     HomePage.verifyBrandLogo();
  });

});
