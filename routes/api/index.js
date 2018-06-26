// ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------
// API index
// ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------

const router = require("express").Router();
const resourceRoutes = require("./resourceroute");
const cohortRoutes = require("./cohortroute");
const userRoutes = require("./userroute");

// Resource routes
router.use("/resources", resourceRoutes);
router.use("/cohorts", cohortRoutes);
router.use("/users", userRoutes);

module.exports = router;