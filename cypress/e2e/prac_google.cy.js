describe('SearchFacebook',()=>{
    beforeEach(()=>{
        cy.visit('https://en-gb.facebook.com/')
    })
    it('CheckText',()=>{
        cy.get('input[id="email"]').type('User')
        cy.get('input[id="pass"]').type('pass{enter}')
    })
})


