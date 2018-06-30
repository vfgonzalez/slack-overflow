const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose")
const axios = require('axios')

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/slackoverflowdb").then((x)=>console.log(x));


// require("./routes/slack-routes.js")(app);
// require("./routes/slackroutes.js")(app);
// require("./routes/rtmslack.js")(app);
// require("./routes/eventsslack.js")(app);

// require("../routes/api/resourceroute.js")(app);
// require("../routes/api/cohortroute.js")(app);
// require("../routes/api/userroute.js")(app);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
})
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
})

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
  console.log(process.env)
})
