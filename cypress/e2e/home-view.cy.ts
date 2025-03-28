import example from "../fixtures/city-group-example.json"

describe('City Search', () => {
  it('filters cities when typing and finds Joinville', () => {
    cy.intercept('GET', 'http://api.openweathermap.org/data/2.5/group*', {
      statusCode: 200,
      body: example,
    }).as('getWeather');

    cy.visit('/');
    cy.wait('@getWeather');
    cy.get('[data-testid="search-input"]').type('join');
    cy.get('[data-testid="city-link-123456"]').should('be.visible');
  });

  it('filters cities when typing and finds no results', () => {
    cy.intercept('GET', 'http://api.openweathermap.org/data/2.5/group*', {
      statusCode: 200,
      body: example,
    }).as('getWeather');

    cy.visit('/');
    cy.wait('@getWeather');
    cy.get('[data-testid="search-input"]').type('random');
    cy.get('[data-testid="no-results"]').should('be.visible');
  });

  it('displays error message when cities API call fails', () => {
    cy.intercept('GET', 'http://api.openweathermap.org/data/2.5/group*', (req) => {
      req.reply((res) => {
        res.send({ statusCode: 500, body: null });
      });
    }).as('getWeatherError');

    cy.visit('/');
    cy.wait('@getWeatherError');
    cy.get('[data-testid="error-message"]').should('be.visible');
  });

  it('displays loading indicator while cities API call is in progress', () => {
    cy.intercept('GET', 'http://api.openweathermap.org/data/2.5/group*', (req) => {
      req.reply((res) => {
        res.setDelay(2000);
        res.send({ statusCode: 200, body: example });
      });
    }).as('getWeather');

    cy.visit('/');
    cy.wait(1000);
    cy.get('[data-testid="loading"]').should('be.visible');
  });
});
