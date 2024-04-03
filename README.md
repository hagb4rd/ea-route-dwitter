# ea-route-dwitter
app.use('/mountpoint', require('ea-route-dwitter')) in your express app - edit and live-preview dwitter golfing code.

### Install

#### Quickstart
`npm install -g ea-route-dwitter` 

start with 
`ea-route-dwitter` 

## Mount module in express http server 
`npm install express && npm install ea-route-dwitter`

server.js
```javascript
var express = require('express');
var app = express();

//mount express-route 
app.use("/dwitter", require("ea-route-dwitter"));

app.listen(3000);

```
start 
 `node server.js`


Browse that address in browser. ( Unconfigured: http://localhost:3000/dwitter )


Press Ctrl+R to load random tweet

---

### Credit
 packaged content: Courtesy of [dwitter.net](dwitter.net) and contributors 

so visit and golf with them