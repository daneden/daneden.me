/// <reference types="cypress" />

const { addMatchImageSnapshotPlugin } = require("cypress-image-snapshot/plugin")

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  addMatchImageSnapshotPlugin(on, config)
}
