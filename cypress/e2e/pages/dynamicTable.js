

class DynamicTable {

  visit() {
    cy.visit('https://qaplayground.dev/apps/dynamic-table/');
    cy.viewport(850, 750);
    return this;
  }

  findRowByHeroName(heroName, expectedRealName) {
    let arrayOfNames = []
    cy.get('tbody#tbody tr td span')

      .filter('.text-sm.font-medium.text-white-900')
      .each(($el) => {
        const textContent = $el.text().trim();

        const name = textContent.split('\n')[0];
        arrayOfNames.push(name);
        arrayOfNames.forEach((el) => {
          if (el !== "Peter Parker") {
            arrayOfNames.shift()
          } else {
            expect(arrayOfNames[0]).to.equal("Peter Parker")
          }
        })
      });

  }

}
export default DynamicTable;