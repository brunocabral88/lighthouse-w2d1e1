var https = require('https');
module.exports = function (options, callback) {
    /* Your code here */
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
};