/// <reference types="cypress" />

/// Тест работоспособности авторизации негативный
describe("Авторизация ЛК неверный пароль", () => {
    beforeEach(() => {
cy.visit("https://staya.dog/")
    })

    it("Авторизация негативная",() => {
        cy.get(".header-bottom__right--link").click(),
        cy.get('section > div > form > input:nth-child(1)').type('bk88@yandex.ru'), 
        cy.get('form > input:nth-child(2)').type('uewMekv222'),
        cy.get("[class='auth-form__submit s-button s-button_theme-red']").click(),
        cy.contains("Невозможно войти с предоставленными учетными данными.")
            })

})
