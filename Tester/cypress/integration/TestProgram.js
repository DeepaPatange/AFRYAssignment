// ************************************************************************************************************
// This script is used to test the functions available in Functions.js file.
// Each test calls respective function to verify if the right data is fetched and functions work as expected
// ************************************************************************************************************

describe('TestProgram', () => {
    it('Test Name', () => {
        cy.visit("/Program/web.html")
        cy.get('.fullName').click()
        cy.get('#RequestedInfo').then(data => {
            cy.testData(data.text(), 'name');
        })
    })
    it('Test Age', () => {
        cy.visit("/Program/web.html")
        cy.get('.age').click()
        cy.get('#RequestedInfo').then(data => {
            cy.testData(data.text(), 'age');
        })
    })
    it('Test Gender', () => {
        cy.visit("/Program/web.html")
        cy.get('.gender').click()
        cy.get('#RequestedInfo').then(data => {
            cy.testData(data.text(), 'gender');
        })
    })
    it('Test AllDetails', () => {
        cy.visit("/Program/web.html")
        cy.get('.fullInfo').click()
        cy.get('#RequestedInfo').then(data => {
            cy.testData(data.text(), 'allDetails');
        })
    })
})