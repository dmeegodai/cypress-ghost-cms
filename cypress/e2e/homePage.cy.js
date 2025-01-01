import HomePage from "../pages/HomePage";
import { testData } from "../data/testData";

describe("Hutch.lk HomePage Test - General Structure Validation", () => {
  // Setup step: Navigate to the homepage before tests
  beforeEach(() => {
    HomePage.visit();
  });

  //  Test case 1: Verify the header is visible
  it("Should verify the home page header, boady and footer", () => {
    HomePage.verifyHeader();
    HomePage.verifyBoadyContent();
    HomePage.verifyFooter();
  });

});
