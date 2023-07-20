'use strict';

/**
 * process controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::process.process');
