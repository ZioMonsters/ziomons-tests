'use strict';

const express = require('express');
const app = new express();
const html = require('./renderLineChart');

const port = 8080;

app.get('/', (req, res) => res.send(html()));

app.get('*', (req, res) => res.json({ error: 'Page not found' }));

app.listen(port, () => console.log(`Server is listening on port ${port}`));
