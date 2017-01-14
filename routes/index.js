module.exports = function(app){

	app.get('/api/getActivityNum', function(req, res){
		var StudyActivity = global.dbHandle.getModel('studyActivity');

		StudyActivity.count({}, function(err, count){
			if(err) {
				res.json({
					'status': 0,
					'msg': '获取失败'
				});
			} else {
				res.json({
					'status': 1,
					'msg': '获取成功',
					'data': count
				});
			}
		});

	});

	app.get('/api/getActivityByPage', function(req, res){
		// console.log(req.query.current);
		// console.log(r);

		var StudyActivity = global.dbHandle.getModel('studyActivity');
		// 每页数目
		var pageSize = 8;
		// 当前页数
		var currentPage = Number(req.query.current) + 1;
		// 排序
		var sort = {'activityId': 1};
		var condition = {};
		var skipnum = (currentPage - 1) * pageSize;

		StudyActivity.find(condition).skip(skipnum).limit(pageSize).sort(sort).exec(function(err, doc){
			if(err) {
				res.json({
					'status': 0,
					'msg': '获取失败',
				});
			}
			res.json({
				'status': 1,
				'msg': '获取成功',
				'data': doc
			});
		});


	});

	app.get('*', function(req, res){
		res.render('index');
	});

	// app.get('/admin', function(req, res){
	// 	res.render('admin');
	// });

	// app.get('/admin-login', function(req, res){
	// 	res.render('admin-login');
	// });

}
