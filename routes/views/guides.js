var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res);
    var locals = res.locals;
    
    locals.wow_class = req.params.class;
    locals.spec = req.params.spec;
	
	// Render the view
	view.render('guides');
};