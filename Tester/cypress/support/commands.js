// *****************************************************
// The command "testData" verifies if the data fetched
// by the functions return the right data 
// *****************************************************


Cypress.Commands.add('testData', (data, field) => {
    if (field == 'name') {
        var name = data.split(' ')
        cy.readFile('../Program/users.json').its('firstName').should('eq', name[0])
        cy.readFile('../Program/users.json').its('lastName').should('eq', name[1])
    }
    else if (field == 'age') {
        const birthyear = new Date().getFullYear() - data
        cy.readFile('../Program/users.json').its('birthYear').should('eq', birthyear)
    }
    else if (field == 'gender')
        cy.readFile('../Program/users.json').its('gender').should('eq', data)
    else if (field == 'allDetails') {
        cy.log(data)
    }
});