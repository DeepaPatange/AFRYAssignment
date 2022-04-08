import {getGender} from '../../../Program/Functions.js'

describe('TestProgram', () => {
    it('Test Name', () => {
       cy.visit("/Program/web.html")
       cy.get('.fullName').click() 
       cy.get('#RequestedInfo').then(data => {
        cy.testData(data.text(),'name');
       })
    })
    it('Test Age', () => {
        cy.visit("/Program/web.html")
        cy.get('.age').click()
        cy.get('#RequestedInfo').then(data => {
        cy.testData(data.text(),'age');
        })
    })
    it('Test Gender', () => {
        cy.visit("/Program/web.html")
        cy.get('.gender').click()
        cy.get('#RequestedInfo').then(data => {
        cy.testData(data.text(),'gender');
        })
    })
    it('Test AllDetails', () => {
        cy.visit("/Program/web.html")
        cy.get('.fullInfo').click()
        cy.get('#RequestedInfo').then(data => {
        cy.testData(data.text(),'allDetails');
        })
    })
  })