describe('SearchHSBC', () => {
    beforeEach(() => {
        cy.visit('https://www.hsbc.co.in/security/')
    })
    
    it('CheckText', () => {
       cy.get('a[href="/security/"]').click()
       cy.get('input[id="username"]').type('Hello')
       cy.get('input[class="checkbox-hidden-rem"]').click()
       cy.get('span[class="icon icon-circle-help-solid help-icon"]').click()
       cy.get('span[class="icon icon-delete"]').click()
       cy.get('button[class="primaryAction pull-right full-size-button g-recaptcha"]').click()
    })
})