// Source - https://stackoverflow.com/a/60549859
// Posted by Carlos Vallejo
// Retrieved 2026-07-18, License - CC BY-SA 4.0

const express = require('express');
const http = require('http');
const path = require('path');

const app = express();

const port = process.env.PORT || 3001;

app.use(express.static(__dirname + '/dist/coras_speech_therapy/browser'));

app.get('/', (req, res) => res.sendFile(path.join(__dirname)));

const server = http.createServer(app);

server.listen(port, () => console.log(`App running on: http://localhost:${port}`));
