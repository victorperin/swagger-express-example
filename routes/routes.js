"use strict";

module.exports = (app, api) => {
  api = require('../api/api');
  app.get('/', api.base);
};
