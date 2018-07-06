// ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------
// Cohort API Routes
// ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------

const router = require("express").Router();
const cohortController = require("../../controllers/cohortController");

// Matches with "/api/cohort"
router.route("/")
  .get(cohortController.findAll)
  .post(cohortController.create);

// Matches with "/api/cohort/:id"
router
  .route("/:id")
  .get(cohortController.findById)
  .put(cohortController.update)
  .delete(cohortController.remove);

module.exports = router;
