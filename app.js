// App.js

/*
    SETUP
*/
const dotenv = require("dotenv");
dotenv.config();

const express = require("express"); // We are using the express library for the web server
const app = express(); // We need to instantiate an express object to interact with the server in our code
const PORT = process.env.PORT || 9124; // Set a port number at the top so it's easy to change in the future

const hopsitalRegionsRouter = require("./routes/hospital-regions");
const visitsRouter = require("./routes/visits");
const treatmentsRouter = require("./routes/treatments");
const physiciansRouter = require("./routes/physicians");
const emergencyDepartmentsRouter = require("./routes/emergency-departments");
const emergencyPhysiciansRouter = require("./routes/emergency-physicians");
const patientsRouter = require("./routes/patients");

// Database
require("./database/db-connector");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public")); // this is needed to allow for the form to use the ccs style sheet/javscript

app.use("/", hopsitalRegionsRouter);
app.use("/", visitsRouter);
app.use("/", treatmentsRouter);
app.use("/", physiciansRouter);
app.use("/", emergencyDepartmentsRouter);
app.use("/", emergencyPhysiciansRouter);
app.use("/", patientsRouter);

/*
    LISTENER
*/
app.listen(PORT, function () {
  // This is the basic syntax for what is called the 'listener' which receives incoming requests on the specified PORT.
  console.log(
    "Express started on http://localhost:" +
      PORT +
      "; press Ctrl-C to terminate."
  );
});
