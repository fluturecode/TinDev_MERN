// Make sure to add "type": "module" to package.json
// to import modules.
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import People from "./peopleModel.js";
import cors from "cors";

// Create instance of application
const app = express();
// Define port where the application will run:
const port = 8000;

// Middleware
app.use(express.json());
app.use(cors());

// Db config
mongoose
	.connect(process.env.MONGO_URL, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("DB Connected"));
mongoose.connection.on("error", (err) => {
	console.log(`DB connection error: ${err.message}`);
});

// API endpoints
app.get("/", (req, res) => res.status(200).send("Response successful."));

app.get("/people", (req, res) => {
	People.find((err, data) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.status(200).send(data);
		}
	});
});

app.post("/people", (req, res) => {
	// Post request will add the data to db
	const dbPeople = req.body;

	People.create(dbPeople, (err, data) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.status(201).send(data);
		}
	});
});

// Set port to listen on
app.listen(port, () => console.log(`Listening on localhost: ${port}`));
