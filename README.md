# ea-route-dwitter
app.use('/mountpoint', require('ea-route-dwitter')) in your express app - edit and live-preview dwitter golfing code.

### Install

`npm install express && npm install ea-route-dwitter`

### Mount module in http server

```javascript
var app=require("express");
app.use("/dwitter", require("ea-route-dwitter"));

```


Browse that address in browser. (Unconfigured: http://localhost:3000/dwitter)

---

### Credit
 packaged content: Courtesy of dwitter.com and contributors 