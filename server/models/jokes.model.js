const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
	setup: {
		type: String,
		required:[true, "This field must be completed"],
		minlength:[10, "Setup must be at least 10 characters long"]
	},
	punchline:{
		type: String,
		required:[true, "This field must be completed"],
		minlength:[3, "Setup must be at least 3 characters long"]
	},
  },
  {timestamps: true}
);

const broma = mongoose.model("broma", JokeSchema);

module.exports = broma;