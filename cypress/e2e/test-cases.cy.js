describe('Testing Contact Form', () => {

  it('TC02 - Should NOT submit the form if fields are empty', () => {
    cy.visit('/index.html')
    cy.log('--- Visiting page ---')

  
    cy.get('button#submit').click()
    cy.log('--- Clicked submit button ---')

    cy.url().should('include', 'index.html')
    cy.log('--- URL is still correct, form was not sent ---')

    cy.get('input[name="name"]')
      .should('have.prop', 'validity')
      .its('valid')
      .should('be.false')
    
    cy.log('--- Name field is correctly marked as invalid ---')
  })


  it('TC0X - Should verify the CV download button', () => {
    cy.visit('/index.html')

    cy.get('a.download').then($button => {
      
      
      expect($button).to.be.visible
      expect($button).to.contain.text('Descargar CV')

      
      expect($button).to.have.attr('download')
      
      const href = $button.attr('href') 
      expect(href).to.eq('./assets/images/Portfolio/CV - Franco Mayer.pdf')

      cy.request(href)
        .its('status')
        .should('eq', 200)
    })
  })

})
