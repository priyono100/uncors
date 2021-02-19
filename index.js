require('dotenv').config()

// var fs = require('fs')
// var path = require('path')
var host = process.env.HOST
var port = process.env.PORT

var cors_proxy = require('cors-anywhere')

cors_proxy.createServer({
  // httpsOptions: {
  //   key: fs.readFileSync(path.resolve(__dirname, 'server.key')),
  //   cert: fs.readFileSync(path.resolve(__dirname, 'server.crt')),
  // },
  originWhitelist: [], // Allow all origins
  requireHeader: [],
  removeHeaders: []
}).listen(port, host, function () {
  console.log('Running CORS Anywhere on ' + host + ':' + port);
});