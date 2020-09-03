import mongoose from "mongoose";

const tindevSchema = mongoosee.Schema({
	firstName: String,
	lastName: String,
	image: String,
	stack: String,
	git: String,
	forHire: String,
	status: String,
	sex: String,
});

export default mongoose.model("people", tindevSchema);
