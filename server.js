const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;
const host = '0.0.0.0';

app.get('/__whoami', (req, res) => {
  res.json({
    pid: process.pid,
    cwd: process.cwd(),
    ts: new Date().toISOString(),
    tz: process.env.TZ || 'UTC'
  });
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, host, () => {
  console.log(`[BusinessMatch] listening on ${host}:${port}`);
});
