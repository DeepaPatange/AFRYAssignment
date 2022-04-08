// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('testData', (data,field) => { 
    if(field == 'name'){
        var name = data.split (' ')
        cy.readFile('../Program/users.json').its('firstName').should('eq', name[0])
        cy.readFile('../Program/users.json').its('lastName').should('eq', name[1])
    }
    else if(field == 'age'){
       const birthyear= new Date().getFullYear()-data
        cy.readFile('../Program/users.json').its('birthYear').should('eq', birthyear)
    }
    else if(field == 'gender')
    cy.readFile('../Program/users.json').its('gender').should('eq', data)
    else if(field == 'allDetails'){
            cy.log(data)
    }
});