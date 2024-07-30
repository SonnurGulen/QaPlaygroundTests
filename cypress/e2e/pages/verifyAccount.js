class VerifyAccount {

    visit() {
        cy.visit('https://qaplayground.dev/apps/verify-account/');
        cy.viewport(850, 750);
        return this;
    }

    verifyInputs() {
        cy.get('.code').wait(1000)
            .each(($el) => {
                cy.wrap($el).click().type('9', { delay: 600 })
                    .should('have.value', '9');
            });

        cy.get("[class='info success'] ")
            .should('have.text', "Success");
    }


}

export default VerifyAccount;