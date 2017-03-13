var https = require('https');
function getHTML (options, callback) {
	var output = '';
	https.get(options,(response) => {
		response.on('data',(data) => {
			output += data;
		});
		response.on('end',() => {
			callback(output);
		})

	}).on('error',(err) => {
		console.log(err);
	}).end();
}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions,printHTML);