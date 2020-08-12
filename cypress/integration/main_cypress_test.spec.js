describe(`Пошаговое прохождение всех функциональных эллементов:
переход на страницу Пингвина, 
добывление новой задачи,
Редактирование задачи,
Сохранение отредактированной задачи,
удаление задачи.
`, () => {
    it("By step do all actions in a funny organizer", () => {
        cy.fixture("cypressTest").then(data => {
            cy.log("Переход на главную страницу")
            cy.visit("http://localhost:3000/")

            cy.log("ожидаем 2 секунды")
            cy.wait(2000)

            cy.log("Проверяем адаптивную верстку на разных устройствах")
            cy.viewport('macbook-15')
            cy.wait(500)
            cy.viewport('macbook-13')
            cy.wait(500)
            cy.viewport('macbook-11')
            cy.wait(500)
            cy.viewport('ipad-2')
            cy.wait(500)
            cy.viewport('ipad-mini')
            cy.wait(500)
            cy.viewport('iphone-6+')
            cy.wait(500)
            cy.viewport('iphone-6')
            cy.wait(500)
            cy.viewport('iphone-5')
            cy.wait(500)
            cy.viewport('iphone-4')
            cy.wait(500)
            cy.viewport('iphone-3')
            cy.wait(500)
            cy.viewport('ipad-2', 'portrait')
            cy.wait(500)
            cy.viewport('iphone-4', 'landscape')
            cy.wait(500)
            cy.viewport(1920, 1000)

            cy.log("ожидаем 2 секунды")
            cy.wait(2000)

            cy.log("Выбор первого элемента из списка")
            cy.get('div.card .card-body h5.card-title a:first').click()

            cy.log("Добавляем новую задачу")
            cy.get(".addTaskForm-input").click().type("ЗАДАЧА СОЗДАНА ПАРСЕРОМ")

            cy.get(".addTaskForm .btn").click()

            cy.log("ожидаем 3 секунды")
            cy.wait(3000)

            cy.log("Редактируем созданную задачу")
            cy.get(".card .card-body .btn-primary:first").click()

            cy.get(".radio-done").click()
            cy.get(".update-input").click().type(" - ДОБАВИЛ ПАРСЕР ПРИ РЕДАКТИРОВАНИИ")
            cy.get(".card .card-body .btn-primary:first").click()

            cy.log("Удаляем добавленный элемент")
            cy.get(".btn-danger:first").click()
        })
    })
})  