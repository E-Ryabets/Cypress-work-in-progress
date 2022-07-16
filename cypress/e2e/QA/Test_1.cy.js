describe('Log in', function () {
    it('Sing in', function () {
        cy.visit('https://top15moscow.ru/')
        cy.get('.header-down_buttons > :nth-child(1) > .header-down_button').click()
        cy.get('.mod_justify-self > .members-filter-btn').click()
       
    })
})
