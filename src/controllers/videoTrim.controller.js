const pick = require('../utils/pick');
const catchAsync = require('../utils/catchAsync');
const { trimService } = require('../services');

const videoTrim = catchAsync(async (req, res) => {
  const { videoUrl, startTime, length } = pick(req.body, ['startTime', 'length', 'videoUrl']);
  const trimmedVideoUrl = await trimService.videoTrimService(videoUrl, startTime, length);
  res.send({ url: trimmedVideoUrl, message: 'Success' });
});

module.exports = {
  videoTrim,
};
