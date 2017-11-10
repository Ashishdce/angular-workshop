// import * as angularUniversal from "angular-universal-express-firebase";
import { angularUniversal } from 'angular4-universal-express';
import { enableProdMode } from '@angular/core';
const {
  provideModuleMap
} = require('@nguniversal/module-map-ngfactory-loader');
const { LAZY_MODULE_MAP } = require('./dist-server/main.bundle.js');

const functions = require('firebase-functions');
const express = require('express');

const trigger = config => {
  return functions.https.onRequest(createExpressApp(config));
};

function valueExists(value) {
  return !(typeof value === 'undefined' || value === null);
}
function createExpressApp(config) {
  const router = express();
  if (valueExists(config.staticDirectory)) {
    router.use(express.static(config.staticDirectory));
  }

  // middleware that applies a Cache-Control header to each dynamic response

  router.get('/*', angularUniversal(config));
  return router;
}

export let ssrapp = trigger({
  index: __dirname + '/dist-server/index.html',
  main: __dirname + '/dist-server/main.bundle',
  enableProdMode: true,
  browserCacheExpiry: 600,
  cdnCacheExpiry: 1200,
  staticDirectory: __dirname + '/dist'
});
