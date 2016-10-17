var mongoose = require('mongoose');
var Climb = mongoose.model('Climb');
var Flap = mongoose.model('Flaps');
var Land = mongoose.model('Landing');


var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

/* GET a Climb Setting by the id */
module.exports.ClimbReadOne = function(req, res) {
  console.log('Finding Climbing Table details', req.params);
  if (req.params && req.params.climbid) {
    Climb
      .findById(req.params.climbid)
      .exec(function(err, climbdata) {
        if (!climbdata) {
          sendJSONresponse(res, 404, {
            "message": "climbid not found"
          });
          return;
        } else if (err) {
          console.log(err);
          sendJSONresponse(res, 404, err);
          return;
        }
        console.log(climbdata);
        sendJSONresponse(res, 200, climbdata);
      });
  } else {
    console.log('No climbid specified');
    sendJSONresponse(res, 404, {
      "message": "No climbid in request"
    });
  }
};

module.exports.FlapsReadOne = function(req, res) {
  console.log('Finding Flaps Table details', req.params);
  if (req.params && req.params.flapsid) {
    Flap
      .findById(req.params.flapsid)
      .exec(function(err, location) {
        if (!location) {
          sendJSONresponse(res, 404, {
            "message": "flapsid not found"
          });
          return;
        } else if (err) {
          console.log(err);
          sendJSONresponse(res, 404, err);
          return;
        }
        console.log(location);
        sendJSONresponse(res, 200, location);
      });
  } else {
    console.log('No flapsid specified');
    sendJSONresponse(res, 404, {
      "message": "No flapsid in request"
    });
  }
};

module.exports.LandingReadOne = function(req, res) {
  console.log('Finding Landing Table details', req.params);
  if (req.params && req.params.landingid) {
    Land
      .findById(req.params.landingid)
      .exec(function(err, location) {
        if (!location) {
          sendJSONresponse(res, 404, {
            "message": "ladingid not found"
          });
          return;
        } else if (err) {
          console.log(err);
          sendJSONresponse(res, 404, err);
          return;
        }
        console.log(location);
        sendJSONresponse(res, 200, location);
      });
  } else {
    console.log('No landingid specified');
    sendJSONresponse(res, 404, {
      "message": "No landingid in request"
    });
  }
};
