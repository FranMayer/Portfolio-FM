describe('Testing Contact Form', () => {

  it('TC01 - Testing form with fake data without send', () => {
    cy.visit('/index.html')

    // intercept post 
    cy.intercept('POST', 'https://getform.io/f/06aee746-8922-45d8-8372-0f2951714d3e', {
      statusCode: 200,  
      body: { success: true }
    }).as('submitForm')

    // Complete form
    cy.get('input[name="name"]').type('Test Name')
    cy.get('input[name="email"]').type('example@test.com')
    cy.get('input[name="subject"]').type('Test subject from Cypress')
    cy.get('textarea[name="comment"]').type('Hello from Cypress')

    cy.get('button#submit').click()

    // Valid intercept
    cy.wait('@submitForm').its('response.statusCode').should('eq', 200)

    // mock
    cy.get('form').then($form => {
      $form.after('<div id="mock-confirm">Your submission has been received</div>')
    })
    cy.contains('Your submission has been received').should('be.visible')
  })

})
