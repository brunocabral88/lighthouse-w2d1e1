var https = require('https');
function getAndPrintHTML (options) {
	var output = '';
	https.get(options,(response) => {
		response.on('data',(data) => {
			output += data;
		});
		response.on('end',() => {
			console.log(output);
		})

	}).on('error',(err) => {
		console.log(err);
	}).end();
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);
