import mongoose from "mongoose";

const peopleSchema = mongoose.Schema({
	name: String,
	url: String,
	language: String,
	git: String,
	forHire: String,
	status: String,
	sex: String,
});

export default mongoose.model("people", peopleSchema);
