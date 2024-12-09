import HomePage from "../pages/HomePage";

describe("Dialog.lk HomePage Test - General Structure Validation", () => {
  // Setup step: Navigate to the homepage before tests
  beforeEach(() => {
    HomePage.visit();
  });

  //  Test case 1: Verify the header is visible
  it("Should verify the header is visible", () => {
    HomePage.verifyHeader();
  });

  // Test case 2: Verify the body content is visible
  it("Should verify the body contnet is vsisible", () => {
    HomePage.verifyBoadyContent();
  });

  // Test case 3: Verify the footer content is visible
  it("It should verify the footer is visible", () => {
    HomePage.verifyFooter();
  });
});
