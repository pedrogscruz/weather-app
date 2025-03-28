import example from "../fixtures/city-example.json"

describe('City Search', () => {
  it('should display city weather info', () => {
    cy.intercept('GET', 'http://api.openweathermap.org/data/2.5/weather*', {
      statusCode: 200,
      body: example,
    }).as('getWeather');

    cy.visit('/city/3445709');
    cy.wait('@getWeather');
    cy.contains('Urubici');
    cy.contains('29°');
    cy.contains('1017 hPa');
    cy.contains('92%');
    cy.contains('☁️');
  });

  it('displays error message when cities API call fails', () => {
    cy.intercept('GET', 'http://api.openweathermap.org/data/2.5/weather*', (req) => {
      req.reply((res) => {
        res.send({ statusCode: 500, body: null });
      });
    }).as('getWeatherError');

    cy.visit('/city/3445709');
    cy.wait('@getWeatherError');
    cy.get('[data-testid="error-message"]').should('be.visible');
  });

  it('displays loading indicator while cities API call is in progress', () => {
    cy.intercept('GET', 'http://api.openweathermap.org/data/2.5/weather*', (req) => {
      req.reply((res) => {
        res.setDelay(2000);
        res.send({ statusCode: 200, body: example });
      });
    }).as('getWeather');

    cy.visit('/city/3445709');
    cy.wait(1000);
    cy.get('[data-testid="loading"]').should('be.visible');
  });
});
