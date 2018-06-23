const router = require("express").Router();
const cohortController = require("../../controllers/cohortController");

// Matches with "/api/books"
router.route("/")
  .get(cohortController.findAll)
  .post(cohortController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(cohortController.findById)
  .put(cohortController.update)
  .delete(cohortController.remove);

module.exports = router;
