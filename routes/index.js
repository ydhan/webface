var express = require('express');
var router = express.Router();

/* GET home page. */
// router.post('/upload', function (req, res, next) {
//   console.log(req.body,req.files);
//   res.json({
//     success: true
//   })
// });

var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();
router.post('/upload', multipartMiddleware, function(req, resp) {
  console.log(req.body, req.files);
  // don't forget to delete all req.files when done
});

module.exports = router;
