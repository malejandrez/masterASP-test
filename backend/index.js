const http = require('http');
const url = require('url');

const PORT = process.argv[2];
const MAX_NUMBER = process.argv[3];
const UPDATE_SECONDS = process.argv[4];
var data = undefined;

const getNewRandom = function(){
	setTimeout(getNewRandom, UPDATE_SECONDS * 1000 );
	data = {random : Math.floor((Math.random() * MAX_NUMBER + 1))};
};

getNewRandom();

http.createServer(function(req, res) {
	var reqUrl = url.parse(req.url, true);
	if (req.method == 'GET' && reqUrl.path == "/api/random") {
		res.writeHead(200, {'Content-Type': 'text/plain',
						'Access-Control-Allow-Origin': '*'});
		res.end(JSON.stringify(data));
		return
	}
	res.writeHead(404,{'Content-Type': 'text/plain'});
	res.end('Not found');
}).listen(PORT);
