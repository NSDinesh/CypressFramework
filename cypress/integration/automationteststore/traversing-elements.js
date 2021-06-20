/// <reference types="Cypress" />
describe("Traversing DOM elements in Cypress", () => {
  beforeEach(() => {
    cy.visit("http://webdriveruniversity.com/");
    cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
  })
  it("children() to get the children of DOM elements", () => {
    cy.get('.breadcrumb.traversal-breadcrumb').children('.active').should('contain','Contact Us')
  });

  it("closest() to validate the closest ancestor DOM element", () => {
    //fetch closest element of .traversal-badge with tag ul
    cy.get('.traversal-badge').closest('ul').should('have.class','list-group')
  });

  it("eq() to retrieve a specific element based on index", () => {
    cy.get('.traversal-drinks-list > *').eq(1).should('contain','Tea')
  });

  it("filter() to retrieve DOM elements that match a specific selector", () => {
    cy.get('.btn-group.btn-group-toggle > *').filter('.active').should('contain','Button-1')
  });

  it("find() to retrieve DOM elements of a given selector", () => {
    cy.get('.traversal-pagination').find('li').find('a').should('have.length',7)
  });

  it("first() to retrieve the first DOM element within elements ", () => {
    cy.get('.traversal-table > tbody > tr >td').first().should('contain','Andy')
  });

  it("last() to retrieve the last DOM element within elements", () => {
    cy.get('.traversal-table > tbody > tr >td').last().should('contain','Scott')
  });

  it("nextAll() to get all of the next sibling DOM elements within elements", () => {
    cy.get('.traversal-drinks-list').contains('Tea').nextAll().should('have.length',3)
    cy.get('.traversal-drinks-list').contains('Tea').nextAll().eq(2).should('contain','Sugar')
  });

  it("nextUntil() to get all of the next sibling DOM elements within elements until another element", () => {
    cy.get('#coffee').nextUntil('#espresso').should('have.length',2).eq(1).and('contain','Milk')
  });

  it("not() to remove DOM element(s) from the set of elements", () => {
    cy.get('.traversal-button-states').children('button').should('have.length',4).not('.disabled').should('have.length',3)
    .each((el,index,list) => {
        cy.log(el.text())
    })
  });

  it("parent() To get parent DOM element of elements", () => {
    cy.get('.traversal-drinks-list').parent().find('h2').should('contain','Lists')
  });

  it("parents() to get parents DOM element of elements", () => {
    //if any of the tag of obtanied parents has blockquote, it will pass
    cy.get('.traversal-cite').parents().should('match','blockquote')
  });


  //prev(), prevAll(), prevUntil()-- simiar as next()
  it("prev() to get the previous sibling DOM element within elements", () => {
  });

  it("prevAll() to get all previous sibling DOM elements within elements", () => {
  });

  it("prevUntil() to get all previous sibling DOM elements within elements until other element", () => {
  });

  it.only("siblings() To get all sibling DOM elements of elements", () => {
    //it picks all the sibling excluding expresso
    cy.get('#espresso').siblings().should('have.length',4)
  });
});
