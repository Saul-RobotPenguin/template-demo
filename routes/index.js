const { Router } = require("express");
const controllers = require("../controllers");
const router = Router();

router.get("/resume", controllers.createResume);
router.post("/resume/create", controllers.createNewResume);

module.exports = router;
