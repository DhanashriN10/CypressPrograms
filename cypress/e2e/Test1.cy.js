/// <reference types="cypress" />

it('google test', function() {

    cy.visit('https://google.com')
    // cy.get('.gLFyf').type('Automation Step by Step{enter}')
    // cy.wait(4000)
    // cy.contains('Videos').click()
  
    // cy.get('.gLFyf',{timeout:6000}).type('Automation Step by Step{enter}')

    // cy.get('.gLFyf').type('Automation Step by Step{enter}')

    // cy.get('.dmenKe > .cIkxbf > .usJj9c > h3 > .l').click()
})


it.only('login test',function(){
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click()
    cy.get('.orangehrm-header-container > .oxd-button').click()
    cy.get('.oxd-button--secondary').click()
})