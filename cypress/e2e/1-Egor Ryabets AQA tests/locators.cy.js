/// <reference types="cypress" />

/// Тест работоспособности Личного Кабинета и авторизации
describe("ЛК сайта", () => {
    beforeEach(() => {
cy.visit("https://staya.dog/")
    })

    it("Авторизация",() => {
        /// Нахожу все элементы с тегами
        cy.get(".header-bottom__right--link").click(),
        cy.get('section > div > form > input:nth-child(1)').type('bk88@yandex.ru'), 
        cy.get('form > input:nth-child(2)').type('uewMekvb98zhJmT'),
        cy.get("[class='auth-form__submit s-button s-button_theme-red']").click(),
        cy.contains("Мои заказы")
            })

})
