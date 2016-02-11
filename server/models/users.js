var keystone = require('keystone'),
    Types = keystone.Field.Types;

var User = new keystone.List('User');

User.add({
    namne : {type: Types.Name, required: true, index: true},
    email : {type: Types.Email, initial: true, required: true, index: true},
    password: {type: Types.Password, initial: true},
    canAccessKeystone: {type: Boolean, initial: true}   // Field to access Admin UI
});

User.register();
