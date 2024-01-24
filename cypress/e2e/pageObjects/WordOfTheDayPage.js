export class WordOfTheDayPage{

    wordDailyElements={
        wordofDay : () => cy.get('[title="word of the day"]')
    }


    wordofDayPresent(){
        
        cy.origin('https://en.wiktionary.org/wiki/Wiktionary:Main_Page', () =>
        {
            cy.get('[title="word of the day"]')
            .contains('Word of the day').should('exist').should('be.visible');
        })
    }


}

export const wordDaily = new WordOfTheDayPage()