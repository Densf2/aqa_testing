/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import cypress, { defineConfig } from 'cypress';
import { addMatchImageSnapshotPlugin } from 'cypress-image-snapshot/plugin.js';

import lib from 'cypress-mochawesome-reporter/lib/index.js';

const { beforeRunHook, afterRunHook } = lib;

export default defineConfig({
  env: {
    qaQautoTestingUrl: 'https://qauto.forstudy.space',
  },
  e2e: {
    viewportWidth: 1300,
    viewportHeight: 800,
    experimentalStudio: true,
    // baseUrl: Cypress.env('hostQa'),
    chromeWebSecurity: false,
    retries: {
      openMode: 1,
      runMode: 1,
    },
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportPageTitle: 'my-reporter-for-cypress-tests',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
    },
    setupNodeEvents(on, config) {
      on('before:run', async (details) => {
        console.log('override before:run');
        await beforeRunHook(details);
      });

      on('after:run', async () => {
        console.log('override after:run');
        await afterRunHook();
      });
      addMatchImageSnapshotPlugin(on);
      // const dynamicUrl =
      //   config.env.urlFromCli || 'https://qauto.forstudy.space';
      // config.baseUrl = dynamicUrl;
      // const BaseUrl1 = cypress.env.hostQa;
      // config.baseUrl = BaseUrl1;
      on('before:browser:launch', (browser, launchOptions) => {
        // console.log(launchOptions.args);
        if (browser.name === 'chrome') {
          launchOptions.args.push('--incognito');
        }
        return launchOptions;
      });

      return config;
    },
  },
});
