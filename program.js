var https = require('https');

function getAndPrintHTMLChunks() {
	
	var requestOptions = {
		host: 'sytantris.github.io',
    	path: '/http-examples/step1.html'
    };

    https.request(requestOptions,(response) => {
    	response.on('data',(data) => {
    		console.log(data + '\n');
    	});
    }).on('error',(err) => {
    	console.log(err);
    }).end();


}

getAndPrintHTMLChunks();