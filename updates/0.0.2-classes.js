/**
 * This script automatically creates a default Admin user when an
 * empty database is used for the first time. You can use this
 * technique to insert data into any List you have defined.
 * 
 * Alternatively, you can export a custom function for the update:
 * module.exports = function(done) { ... }
 */
var keystone = require('keystone'),
	async = require('async'),
	Class = keystone.list('Class');

function createClass(wowClass, done) {
    var newClass = new Class.model(wowClass);
	
	newClass.save(function(err) {
		if (err) {
			console.error("Error adding class " + wowClass.name + " to the database:");
			console.error(err);
		} else {
			console.log("Added admin " + wowClass.name + " to the database.");
		}
	});
}

var classes = [
    { name: 'Warrior', spec: [
        { name: 'Arms', image: 'http://media.blizzard.com/wow/icons/56/ability_warrior_savageblow.jpg' },
        { name: 'Fury', image: 'http://media.blizzard.com/wow/icons/56/ability_warrior_innerrage.jpg'},
        { name: 'Protection', image: 'http://media.blizzard.com/wow/icons/56/ability_warrior_defensivestance.jpg'}
    ]},
    
    { name: 'Paladin', spec: [
        { name: 'Holy', image: 'http://media.blizzard.com/wow/icons/56/spell_holy_holybolt.jpg' },
        { name: 'Protection', image: 'http://media.blizzard.com/wow/icons/56/ability_paladin_shieldofthetemplar.jpg'},
        { name: 'Retribution', image: 'http://media.blizzard.com/wow/icons/56/spell_holy_auraoflight.jpg'}
    ]},
    
    { name: 'Hunter', spec: [
        { name: 'Beast Mastery', image: 'http://media.blizzard.com/wow/icons/56/ability_hunter_bestialdiscipline.jpg' },
        { name: 'Marksmanship', image: 'http://media.blizzard.com/wow/icons/56/ability_hunter_focusedaim.jpg'},
        { name: 'Survival', image: 'http://media.blizzard.com/wow/icons/56/ability_hunter_camouflage.jpg'}
    ]},
    
    { name: 'Rogue', spec: [
        { name: 'Assassination', image: 'http://media.blizzard.com/wow/icons/56/ability_rogue_eviscerate.jpg' },
        { name: 'Combat', image: 'http://media.blizzard.com/wow/icons/56/ability_backstab.jpg'},
        { name: 'Subtlety', image: 'http://media.blizzard.com/wow/icons/56/ability_stealth.jpg'}
    ]},
    
    { name: 'Priest', spec: [
        { name: 'Discipline', image: 'http://media.blizzard.com/wow/icons/56/spell_holy_powerwordshield.jpg' },
        { name: 'Holy', image: 'http://media.blizzard.com/wow/icons/56/spell_holy_guardianspirit.jpg'},
        { name: 'Shadow', image: 'http://media.blizzard.com/wow/icons/56/spell_shadow_shadowwordpain.jpg'}
    ]},
    
    { name: 'Death Knight', spec: [
        { name: 'Blood', image: 'http://media.blizzard.com/wow/icons/56/spell_deathknight_bloodpresence.jpg' },
        { name: 'Frost', image: 'http://media.blizzard.com/wow/icons/56/spell_deathknight_frostpresence.jpg'},
        { name: 'Unholy', image: 'http://media.blizzard.com/wow/icons/56/spell_deathknight_unholypresence.jpg'}
    ]},
    
    { name: 'Shaman', spec: [
        { name: 'Elemental', image: 'http://media.blizzard.com/wow/icons/56/spell_nature_lightning.jpg' },
        { name: 'Enhancement', image: 'http://media.blizzard.com/wow/icons/56/spell_nature_lightningshield.jpg'},
        { name: 'Restoration', image: 'http://media.blizzard.com/wow/icons/56/spell_nature_magicimmunity.jpg'}
    ]},
    
    { name: 'Mage', spec: [
        { name: 'Arcane', image: 'http://media.blizzard.com/wow/icons/56/spell_holy_magicalsentry.jpg' },
        { name: 'Fire', image: 'http://media.blizzard.com/wow/icons/56/spell_fire_firebolt02.jpg'},
        { name: 'Frost', image: 'http://media.blizzard.com/wow/icons/56/spell_frost_frostbolt02.jpg'}
    ]},
    
    { name: 'Warlock', spec: [
        { name: 'Affliction', image: 'http://media.blizzard.com/wow/icons/56/spell_shadow_deathcoil.jpg' },
        { name: 'Demonology', image: 'http://media.blizzard.com/wow/icons/56/spell_shadow_metamorphosis.jpg'},
        { name: 'Destruction', image: 'http://media.blizzard.com/wow/icons/56/spell_shadow_rainoffire.jpg'}
    ]},
    
    { name: 'Monk', spec: [
        { name: 'Brewmaster', image: 'http://media.blizzard.com/wow/icons/56/spell_monk_brewmaster_spec.jpg' },
        { name: 'Mistweaver', image: 'http://media.blizzard.com/wow/icons/56/spell_monk_mistweaver_spec.jpg'},
        { name: 'Windwalker', image: 'http://media.blizzard.com/wow/icons/56/spell_monk_windwalker_spec.jpg'}
    ]},
    
    { name: 'Druid', spec: [
        { name: 'Balance', image: 'http://media.blizzard.com/wow/icons/56/spell_nature_starfall.jpg' },
        { name: 'Feral', image: 'http://media.blizzard.com/wow/icons/56/ability_druid_catform.jpg'},
        { name: 'Guardian', image: 'http://media.blizzard.com/wow/icons/56/ability_racial_bearform.jpg'},
        { name: 'Restoration', image: 'http://media.blizzard.com/wow/icons/56/spell_nature_healingtouch.jpg'}
    ]},
    
    { name: 'Demon Hunter', spec: [
        { name: 'Havoc', image: 'http://media.blizzard.com/wow/icons/56/spell_demonhunter_havoc.jpg' },
        { name: 'Vengeance', image: 'http://media.blizzard.com/wow/icons/56/spell_demonhunter_vengeance.jpg'}
    ]}
];
exports = module.exports = function(done) {
	async.forEach(classes, createClass, done);
};