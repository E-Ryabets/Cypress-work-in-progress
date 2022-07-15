/// <reference types="cypress" />

/// Яндекс.метро мониторинг негативный сценарий конечной точки
describe("Указать несуществующую станцию", () => {
    beforeEach(() => {
cy.visit("https://yandex.ru/metro/moscow")
    })

    it("Указать в маршруте несуществующую станцию",() => {
        /// Нахожу все элементы с тегами
        cy.get("svg:nth-child(2) > g:nth-child(76) > text:nth-child(4) > tspan").click(),
        cy.get("[class='metro-input-form__stop-suggest _type_to']").type('Новоелдово{Enter}'),
        cy.contains("Вы не задали точку маршрута")
            })

})
