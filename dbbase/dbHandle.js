var mongoose = require('mongoose');
var models = require('./models.js');

var Schema = mongoose.Schema;

for( var modelName in models){
	if(!db.modelName){
		mongoose.model(modelName, new Schema( models[ modelName ] ));
	}
}

module.exports = {
	getModel : function( modelName ){
		return _getModel( modelName );
	}
};

var _getModel = function( modelName ){
	return mongoose.model( modelName );
}