const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require('fluent-ffmpeg');
const httpStatus = require('http-status');
const ApiError = require('./ApiError');
const logger = require('../config/logger');

ffmpeg.setFfmpegPath(ffmpegPath);

/**
 * download and video from url
 * @param {any} video - videoData
 * @param {Number} startTime - start time to millisecond
 * @param {Number} length - length to millisecond
 * @param {String} outPutFolderName - output folder Name
 * @returns {Promise<String>}
 */
const videoTrimmer = (video, startTime, length, outPutFolderName) => {
  return new Promise((resolve, reject) => {
    ffmpeg(video)
      .seek(startTime / 1000)
      .setDuration(length / 1000)
      .output(`public/video-files/${outPutFolderName}.mp4`)
      .on('end', (error) => {
        if (!error) {
          logger.info(`video-files/${outPutFolderName}.mp4 is ready!`);
          resolve(`video-files/${outPutFolderName}.mp4`);
        }
        reject(error);
      })
      .on('error', (error) => {
        return reject(
          new ApiError(
            httpStatus.BAD_REQUEST,
            'invalid file or format of the video!',
            true,
            error.stack
          )
        );
      })
      .on('start', (commandLine) => {
        logger.info(`Spawned Ffmpeg with command: ${commandLine}`);
      })
      .run();
  });
};

module.exports = {
  videoTrimmer,
};
