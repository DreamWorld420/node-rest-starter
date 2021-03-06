const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		unique: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
		select: false,
	},
	createdAt: {
		type: Date,
	},
});

userSchema.pre("save", async function (next) {
	if (this.isModified("password")) {
		this.password = await bcrypt.hash(this.password, 12);
	}
	next();
});

userSchema.pre("save", function (next) {
	if (this.isNew) {
		this.createdAt = new Date();
	}
	next();
});

userSchema.methods.isValidPassword = async function (candidate, userPassword) {
	return bcrypt.compare(candidate, userPassword);
};

module.exports = mongoose.model("User", userSchema);
