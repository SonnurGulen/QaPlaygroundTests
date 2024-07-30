class TagsInput {

    visit() {
        cy.visit('https://qaplayground.dev/apps/tags-input-box/');
        cy.viewport(850, 750);
        return this;
    }

    putInputCheck() {
        cy.get("[type='text']").click().type('Hello World', { delay: 200 }).type('{enter}');
        cy.get('ul li').last().should('have.text', 'Hello World ')
        return this
    }

    deleteLastInput() {
        cy.get("[class='uit uit-multiply']").last().click({ force: true }).should('not.exist')
        return this
    }

    addSingleChar() {
        cy.get("[type='text']").click().type('a', { delay: 200 }).type('{enter}');
        cy.get('ul li').each(($el) => {
            cy.wrap($el).should('not.have.text', 'a')
        })

        return this
    }

    addEmptyChar() {
        cy.get("[type='text']").click().type('  ', { delay: 200 }).type('{enter}');
        cy.get('ul li').each(($el) => {
            cy.wrap($el).should('not.have.text', '  ')
        })
        return this
    }

    maxInputs() {
        cy.get('body > main > div > div.details > p > span')
            .invoke('text')
            .then((maxTagsText) => {
                const maxTags = parseInt(maxTagsText, 10);
                for (let i = 0; i < maxTags; i++) {
                    cy.get('input[type="text"]').type('tag' + i + '{enter}');
                }
            });

        cy.get('body > main > div > div.details > p > span').should('have.text', '0')
        return this
    }
    
    deleteAllInputs() {
        cy.get("body > main > div > div.details > button").click()
        cy.get('[class="details"] p').should('have.text', '10 tags are remaining')
        return this
    }

}

export default TagsInput