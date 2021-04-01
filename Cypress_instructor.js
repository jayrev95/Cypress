describe('Cypress Demo', () => {
    it('Visit Goreact', () => {
      cy.visit(' https://dev.goreact.com/')

    })
    it('Register Instructor - Negative', () => {
      cy.visit(' https://dev.goreact.com/')
      cy.title().should('eq','GoReact Login')
      cy.get('[data-cy=create-account]').click()
      cy.get('[data-cy=ins-sign-up-button]').click()
      cy.get('[data-cy=signup-form-firstname]').type('Jay')
      cy.get('[data-cy=signup-form-lastname]').type('Santos')
      cy.get('[data-cy=signup-form-phone]').type('09298275376')
      cy.get('[data-cy=signup-form-email]').type('jayson_revidad@dlsu.edu.ph')
      cy.get('[data-cy=signup-form-password]').type('Noobers3d#')
      cy.get('[data-cy=signup-form-password-confirm]').type('Noobers3d#')
      cy.get('[data-cy=signup-form-submit]').click()
    })
    
    it('Register Instructor', () => {
        cy.visit(' https://dev.goreact.com/')
        cy.title().should('eq','GoReact Login')
        cy.get('[data-cy=create-account]').click()
        cy.get('[data-cy=ins-sign-up-button]').click()
        cy.get('[data-cy=signup-form-firstname]').type('Jay')
        cy.get('[data-cy=signup-form-lastname]').type('Santos')
        cy.get('[data-cy=signup-form-phone]').type('09298275376')
        cy.get('[data-cy=signup-form-email]').type('jayson_revidad@dlsu.edu.ph')
        cy.get('[data-cy=signup-form-password]').type('Noobers3d#')
        cy.get('[data-cy=signup-form-password-confirm]').type('Noobers3d#')
        cy.get('[data-cy=signup-form-terms-agree]').click()
        cy.get('[data-cy=signup-form-submit]').click()
        cy.get('[data-cy^="rich-dropdown-"]').eq(0).select('Personal Use')
        cy.get('[data-cy^="rich-dropdown-"]').eq(1).select('Teacher Preparation')
        cy.get('[data-cy^="rich-dropdown-"]').eq(2).select('Online')
        cy.get('[data-cy=acct-setup-submit]').click()

      })
      it('Login ', () => {
        cy.visit(' https://dev.goreact.com/')
        cy.title().should('eq','GoReact Login')
        cy.get('[data-cy=login-email-field]').type('jayson_revidad@dlsu.edu.ph')
        cy.get('[data-cy=login-password-field]').type('Noobers3d#')
        cy.get('[data-cy=login-button]').click()
      })
     
  })