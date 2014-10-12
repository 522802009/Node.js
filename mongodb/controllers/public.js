exports.captcha = function(req, res, next){
	var ccap = require('ccap');
	var captcha = ccap({
		width : 200,
		height : 50,
		quality : 100,
	}).get();
	console.log(captcha[0]);
	res.end(captcha[1]);
	res.end();
}
