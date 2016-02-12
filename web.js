var keystone = require('keystone');
keystone.init({

  'name' : 'raidclass',
  // Need to look at what the build output structure looks like (need to switch to macos env)

  'favicon': 'public/favicon.ico',
  'less': 'source',
  'static': 'source',

  'views': 'templates/views',
  'view engine': 'jade',

  'auto update' : true,
  'mongo' : 'mongodb://localhost/raidclass-dev',

  'session' : true,
  'auth' : true,
  'user model' : 'User',
  'cookie secret' : 'DevSecret' // Will eventually want to pull this out of an environment variable and not check into git.

});

require('./models');

keystone.set('routes', require('./routes'));

keystone.start();
