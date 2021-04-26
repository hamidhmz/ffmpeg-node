const { v4: uuidv4 } = require('uuid');
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require('fluent-ffmpeg');
const httpStatus = require('http-status');
const config = require('../config/config');
const ApiError = require('../utils/ApiError');
const request = require('../utils/request');
const { videoTrimmer } = require('../utils/videoEditor');

ffmpeg.setFfmpegPath(ffmpegPath);

/**
 * download and video from url
 * @param {String} videoUrl - minCount for totalCount
 * @returns {Promise<String>}
 */
const downloadVideo = (videoUrl) => {
  return request('get', videoUrl).catch((error) => {
    if (error.isAxiosError) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'invalid video or link!', true, error.stack);
    }
    throw error;
  });
};

/**
 * download and video from url
 * @param {String} videoUrl - minCount for totalCount
 * @param {Number} startTime - start time to millisecond
 * @param {Number} length - length to millisecond
 * @returns {Promise<String>}
 */
const videoTrimService = async (videoUrl, startTime, length) => {
  const outPutFileName = uuidv4();

  const streamVideo = await downloadVideo(videoUrl);

  const pathForFile = await videoTrimmer(streamVideo, startTime, length, outPutFileName);

  return `${config.appUrl}${pathForFile}`;
};

module.exports = {
  videoTrimService,
};
