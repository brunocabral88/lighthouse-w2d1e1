var https = require('https');

function getAndPrintHTML() {
	var output = '';
	var requestOption = {
		host: 'sytantris.github.io',
		path: '/http-examples/step2.html'
	};

	https.get(requestOption,(response) => {
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

getAndPrintHTML();