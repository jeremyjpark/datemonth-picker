'use strict';

const express = require('express');
const app = new express();

app.use(express.static(`${__dirname}/public`));

// Dev middleware:

const webpack = require('webpack');
const config = require('./webpack.dev.config.js');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, { publicPath: config.output.publicPath, noInfo: true }));
app.use(webpackHotMiddleware(compiler));

const port = 8080 || process.env.port;
app.listen(port, () => console.log(`Listening on ${port}`));
