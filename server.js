const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
const TZ = process.env.TZ || 'America/Sao_Paulo';
app.use(express.static(path.join(__dirname,'public')));
app.get('/__whoami',(_req,res)=>res.json({pid:process.pid,cwd:process.cwd(),ts:new Date().toISOString(),tz:TZ}));
app.get('/',(_req,res)=>res.sendFile(path.join(__dirname,'public','index.html')));
app.listen(PORT,()=>console.log(`[BusinessMatch] listening on ${PORT}`));
