// ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------
// Resource API Router
// ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------

const router = require("express").Router();
const resourceController = require("../../controllers/resourceController");

// Matches with "/api/resource"
router.route("/")
  .get(resourceController.findAll)
  .post(resourceController.create);

// Matches with "/api/resources/:id"
router.route("/:id")
  .get(resourceController.findById)
  .put(resourceController.update)
  .post(resourceController.castVote)
  .delete(resourceController.remove);

module.exports = router;