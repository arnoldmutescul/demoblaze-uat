/// <reference types="cypress" />

context('login existing user', () => {

    it('', () => {
        // login existing user

        // arrange
        // open home page
        // open https://www.demoblaze.com/index.html
        cy.visit('https://www.demoblaze.com/index.html')

        // cy.get('div[class="carousel-item active"]')
        // div[class="carousel-item active"]
        // img[src="nexus1.jpg"]
        cy.get('img[src="nexus1.jpg"]').should('exist')

        // act
        // login
        // type user
        // type password
        // submit form
        cy.intercept('https://api.demoblaze.com/entries').as('api')
        cy.get('[id="login2"]').click()
        cy.wait('@api')
        cy.wait(500)
        cy.get('[id="loginusername"]').type('test')
        cy.get('[id="loginpassword"]').type('test')
        // can it get other class="modal-footer" if clicked on
        cy.get('div[class="modal-footer"]').contains('Log in').click()

        // assert
        // check that user is logged in
        //TODO: to imporve timeout
        cy.wait(2000)
        cy.get('[id="logout2"]').should('be.visible')

    })
})


