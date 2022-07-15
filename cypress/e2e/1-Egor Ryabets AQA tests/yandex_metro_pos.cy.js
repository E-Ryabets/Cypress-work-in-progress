/// <reference types="cypress" />

/// Яндекс.метро мониторинг доступности красной ветки 
describe("Красная ветка - доступность", () => {
    beforeEach(() => {
cy.visit("https://yandex.ru/metro/moscow")
    })

    it("Проложить путь по красной ветке",() => {
        cy.get("svg:nth-child(2) > g:nth-child(76) > text:nth-child(4) > tspan").click(),
        cy.get("svg:nth-child(2) > g:nth-child(304) > text:nth-child(4) > tspan:nth-child(2)").click(),
        cy.get("div:nth-child(1) > div > div > span.metro-dialog-view__station-text").click(),
        cy.contains("Ещё 24 станции")
            })

})
