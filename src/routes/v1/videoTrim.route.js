const express = require("express");
const validate = require("../../middleware/validate");
const videoTrimValidation = require("../../validations/videoTrim.validation");
const videoTrimController = require("../../controllers/videoTrim.controller");

const router = express.Router();

router
  .route("/")
  .post(validate(videoTrimValidation.videoTrim), videoTrimController.videoTrim);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: video-trim
 *   description: Trim a video which take it from an url
 */

/**
 * @swagger
 *
 *  /video-trim:
 *    post:
 *      summary: Trim an video
 *      description: Fetch and trim and video and return an url for download trimmed version of that video.
 *      tags: [video-trim]
 *      requestBody:
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                startTime:
 *                  type: integer
 *                  description: Start time for trimming operation to milliseconds
 *                length:
 *                  type: integer
 *                  description: length time for trimming operation to milliseconds
 *                videoUrl:
 *                  type: string
 *                  description: Filter for totalCount filed (which filter total number of count is bigger than minCount)
 *              example:
 *                startTime: 156
 *                length: 10000
 *                videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
 *      responses:
 *        "201":
 *          description: OK
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  url:
 *                    type: string
 *                  message: Success
 *        "400":
 *          $ref: '#/components/responses/BadRequest'
 *        "404":
 *          $ref: '#/components/responses/NotFound'
 *
 */
