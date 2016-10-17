var mongoose = require('mongoose');

var climbTable = new mongoose.Schema({
	weight: Number,
	vfri5: Number,
	vfri10: Number,
	vfri15: Number,
	vclmb: Number
});

mongoose.model('ClimbTable', climbTable, 'climbTables');