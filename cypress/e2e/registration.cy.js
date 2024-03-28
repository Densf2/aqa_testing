/* eslint-disable eqeqeq */
/* eslint-disable import/extensions */
/* eslint-disable camelcase */
/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
/// <reference types="cypress" />
import { RegistrationPage } from './pages/registration';

describe('tests for registration on qauto', () => {
  beforeEach(() => {
    cy.login();
  });

  it('checks registration creds', () => {
    const reg_page = new RegistrationPage();

    cy.fixture('users').then((data) => {
      data.forEach((userdata) => {
        reg_page.clickSignInButton();
        reg_page.clickRegistrationButton();
        reg_page.setName(userdata.name);
        reg_page.setLastName(userdata.last_name);
        reg_page.setEmail(userdata.email);
        reg_page.setPassword(userdata.password);
        reg_page.setReEnterPassword(userdata.re_enter_password);
        reg_page.clickfinalRegisterButton();

        // existing user
        if (userdata.name == 'John' && userdata.last_name == 'Andersen') {
          cy.get(reg_page.errorMsg).should('have.text', 'User already exists');
          cy.reload();
        }

        // incorrect name - invalid creds message shows
        if (userdata.name == 'Jane_123' && userdata.last_name == 'Williams') {
          cy.get(reg_page.invalidCredsMessage).should(
            'have.text',
            'Name is invalid',
          );
          cy.reload();
        }

        // not maching passwords - password error message is shown
        if (userdata.name == 'Robert' && userdata.last_name == 'Miller') {
          cy.get(reg_page.invalidCredsMessage).should(
            'have.text',
            'Passwords do not match',
          );
          cy.reload();
        }
      });
    });
  });
});
