describe('Guitar bank test 1', () => {
    it('Найти контент', () => {
      cy.visit('https://guitarbank.ru/')
  
      cy.contains('Все что указано на сайте — реальные инструменты')
    })
  })