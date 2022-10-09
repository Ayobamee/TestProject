/// <reference types= "cypress" />

//Here is the describe block where we describe our test project name
describe("Quales Course Management Test Suite", () => {
  //Here is it block, where both test case description and test scripts
  it("Validate that a user can sign in successfully to the Quales management app", () => {
    //Here is where our cypress scripts shall be written

    //Visit the quales web app url
    cy.visit("http://tawdry-rule.surge.sh");
    //Spy on the sign button
    cy.get(".css-48p1y4 > .MuiButton-root")
    //click sign in
    .click();

    //Spy on the email input field
    cy.get('[data-testid=EmailAddress]')
    //type in the email field
    .type("ay@mail.com")

    //Spy on the password input field
    cy.get('[data-testid=Password]')
    //type in the password field
    .type("pass1234")

    //Spy Login button
    cy.get('.MuiButton-contained')
    .click()

    //Write an assertion that the name Ayobami appears
    //Spy on the name Ayobami
    cy.contains('Ayobami')
    .should("be.visible")
  });
});
