const express = require("express");
const videoTrimRoute = require("./videoTrim.route");
const docsRoute = require("./docs.route");

const router = express.Router();

router.use("/video-trim", videoTrimRoute);
router.use("/docs", docsRoute);

module.exports = router;
