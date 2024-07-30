/// <reference types="cypress" />
import DynamicTable from "../pages/dynamicTable";

describe('Dynamic Table', () => {
  const dynamicTable = new DynamicTable();

  it('should find Spider-Man and assert his real name', () => {

    dynamicTable
      .visit()
      .findRowByHeroName("Spider-Man", "Peter Parker")

  });

});

