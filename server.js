var Express = require('express');

var server = Express();
server.use('/', Express.static('public'));
server.listen(process.env.PORT || 3000);