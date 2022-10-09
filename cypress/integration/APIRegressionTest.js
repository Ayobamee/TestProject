/// <reference types= "cypress" />

//Here is the describe block where we describe our test project name
describe("Quales API Regression Test Suite", () => {
  //Here is it block, where both test case description and test scripts
  it("Validate that i can use a POST Method to create a course via Cypress' API Method", () => {
    //Here is where our cypress scripts shall be written
    cy.request({
      method: "POST",
      url: "https://notification-service.ishchoolapi.xyz/api/courses/",
      body: {
        title: "Testing via Cypress",
        categoryId: 2,
        description: "Cypress API Test",
        courseUrl: "https://www.youtube.com/watch?v=8vXoMqWgbQQ",
        imageUrl: "https://source.unsplash.com/user/c_v_r/900x800",
        location: "online",
        isPremium: false,
      },
    }).as("createACourseRequest");
    cy.get("@createACourseRequest").then((res) => {
      cy.log(JSON.stringify(res.body));
      expect(res.status).to.eq(200);
    });
  });
});
