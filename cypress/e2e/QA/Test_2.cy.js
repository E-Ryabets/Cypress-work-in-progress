describe('Guitar bank test 2', () => {
    it('Найти контент', () => {
      cy.visit('https://guitarbank.ru/')
  
      cy.contains('Все что указано на сайте — реальные инструменты')
      cy.get('.todo-list li').should('have.length', 2)
    })
  })