const DEV_URL = "http://localhost:3000";

describe("CRUD flow - ui-todo", () => {
  before(() => {
    cy.visit(DEV_URL).wait(1000);
  });

  it("should display header", () => {
    cy.get("[data-cy=header]").should("have.text", "TODO");
  });

  //As they are all the same attributes, have text appended
  it("should be able to add todo", () => {
    cy.get("[data-cy=todo-input__input]").type("Buy Groceries");
    cy.get("[data-cy=todo-input__button").click();
    cy.get("[data-cy=todo-input__input]").type("Write TODO app");
    cy.get("[data-cy=todo-input__button").click();
    cy.get("[data-cy=todo-input__input]").type("Send masks to grandma");
    cy.get("[data-cy=todo-input__button").click();
    cy.get("[data-cy=todo-task__name]").should(
      "have.text",
      "Buy GroceriesWrite TODO appSend masks to grandma"
    );
  });


  it("should be able to delete todo", () => {
    //The multiple:true allows clicking through the items in the array serially
    cy.get("[data-cy=todo-task__button-delete]").click({multiple:true});
    //Check that the element does not exist
    cy.get("[data-cy=todo-task__name]").should("not.exist");
  });

});
