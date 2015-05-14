var express = require('express');
var app = express();
app.use(express.static(__dirname));

app.get('/test-xhr', function(req, res) {
	console.log('XHR HIT');
	// if there were an error, we would send { error: 'error description' }
	res.send({ success: true, test: 'Test is working' });
});

// Server
app.set('port', process.env.PORT || 8000);
app.listen(app.get('port'), function(){
	console.log( 'Express started in ' + app.get('env') +
		' mode on http://localhost:' + app.get('port') +
		'; press Ctrl-C to terminate.' );
});