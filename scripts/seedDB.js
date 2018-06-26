const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/slackoverflowdb",
  {
    // useMongoClient: true
  }
);

const resourcesSeed = [
  {
    link: "https://medium.freecodecamp.org/",
    title: "Free Code Camp",
    description: "A useful tool for brushing up on past things we have learned.",
    category: "Teaching Resource",
    createAd: new Date(Date.now()),
    author: "Thomas Seaman",
    voteCount: 0
  },
  {
    link: "https://developers.google.com/web/tools/chrome-devtools/?hl=en",
    title: "Chrome Developer Tools",
    description: "Every developers must have tool when developing in chrome.",
    category: "General Tools",
    createAd: new Date(Date.now()),
    author: "Christian Lopes",
    voteCount: 0
  },
  {
    link: "https://validator.w3.org/#validate_by_input",
    title: "HTML Validator",
    description: "Use this tool to make sure that you HTML is validated with ease.",
    category: "HTML",
    createAd: new Date(Date.now()),
    author: "Vicente Gonzalez",
    voteCount: 0
  },
  {
    link: "https://www.bootstrapcdn.com/fontawesome/",
    title: "Font Awesome",
    description: "A good resource for fonts.",
    category: "CSS",
    createAd: new Date(Date.now()),
    author: "Gavin Quirk",
    voteCount: 0
  },
  {
    link: "https://sizzy.co/",
    title: "Sizzy",
    description: "Sizzy is a tool for developing responsive websites crazy-fast. It allows you to preview an url on multiple devices at once, filter the devices, zoom them in and out, and more.",
    category: "Testing",
    createAd: new Date(Date.now()),
    author: "Thomas Seaman",
    voteCount: 0
  },
  {
    link: "http://forcemipsum.com/",
    title: "Star War Lorem Generator",
    description: "Star Wars word generator for when the standard stuff just gets boring!",
    category: "Random",
    createAd: new Date(Date.now()),
    author: "Thomas Seaman",
    voteCount: 0
  }
]

const cohortSeed = [
  {
    cohortname: "UCIRV201801FSF2"
  }
]

const usersSeed = [
  {
    username: "Thomas Seaman",
    accountLevel: "Admin",
    password: "1234",
    cohort: "UCIRV201801FSF2"
  }
]


db.Resource
  .remove({})
  .then(() => db.Resource.collection.insertMany(resourcesSeed))
  .then(data => {
    console.log(data.insertedIds.length + " resources inserted!");
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.Cohort
  .remove({})
  .then(() => db.Cohort.collection.insertMany(cohortSeed))
  .then(data => {
    console.log(data.insertedIds.length + " cohort inserted!");
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(usersSeed))
  .then(data => {
    console.log(data.insertedIds.length + " users inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
