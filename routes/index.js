module.exports = function(app){

	app.get('/', function(req, res){
		res.render('index');
	});

	app.use('/adminLogin', require('./adminLogin'));

	app.use('/admin', require('./admin'));

	app.use('/studyActivity', require('./studyActivity'));

	// app.get('/admin', function(req, res){
	// 	res.render('admin');
	// });

	// app.get('/admin-login', function(req, res){
	// 	res.render('admin-login');
	// });

	app.use('*', function(req, res) {
		res.render('index');
	});

	app.use(function (req, res) {
		// 当头部已经有响应后,res.headerSent 为true 否则为false.
		if (!res.headerSent) {
			res.render('404');
		}
	})

}
