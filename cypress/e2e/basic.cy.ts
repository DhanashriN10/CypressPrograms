it('google test',function(){
    cy.visit('https://google.com')

    cy.get('[name="q"]')
            .type("React")
            .type('{enter}')
})