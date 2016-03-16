var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * User Model
 * ==========
 */

var Class = new keystone.List('Class');

Class.add({
	name: { type: Types.Text, required: true, index: true }
});

Class.schema.add({
    spec: {
        type: [{
            name: String,
            image: String
        }]
    }
});


Class.register();