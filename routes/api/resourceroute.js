// ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------
// Resource API Routes
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
  .post(resourceController.castVote)

// Matches with "/api/resources/:category"
router.route("/:category")
  .get(resourceController.findByCategory)

// Matches with "/api/resources/:title"
router.route("/:title")
    .delete(resourceController.remove);



module.exports = router;