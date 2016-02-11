var keystone = require('keystone');
keystone.init({

  'name' : 'raidclass',
  // Need to look at what the build output structure looks like (need to switch to macos env)
  'favicon' : '',
  'less' : '',
  'static' : [],

  'views' : '',
  'view engine' : 'jade', // Look at options and change

  'auto update' : true,
  'mongo' : '', // TODO: Stand an instance up locally on dev pi.

  'session' : true,
  'auth' : true,
  'user model' : 'User',
  'cookie secret' : 'DevSecret' // Will eventually want to pull this out of an environment variable and not check into git.

});

require('./models');

keystone.set('routes', require('./routes'));

keystone.start();
