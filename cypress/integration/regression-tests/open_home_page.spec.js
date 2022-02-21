/// <reference types="cypress" />

context('open home page', () => {

    it('', () => {
        //open home page

        //arrange// act
        //open https://www.demoblaze.com/index.html
        cy.visit('https://www.demoblaze.com/index.html')

        //assert
        //check that carousel is visible
        //cy.get('div[class="carousel-item active"]')
        //div[class="carousel-item active"]
        //img[src="nexus1.jpg"]
        cy.get('img[src="nexus1.jpg"]').should('exist')
        })
})


