'use strict';

exports.getJWT = function(req, res) {
 
  var jwt = require('jsonwebtoken');
  var fs = require('fs');

  var cert = fs.readFileSync('pk.pem');  
  var iat = Math.floor(Date.now() / 1000) ;
  var exp = Math.floor(Date.now() / 1000) + (req.params.expire*60);
  jwt.sign({ iss: "https://liveperson.com", sub: req.params.name ,  iat: iat , exp: exp}, cert, { algorithm: 'RS256' }, function(err, token) {
    res.json({token:token});
  });
};

exports.getJWTWithSDE = function(req, res) {
 
  var jwt = require('jsonwebtoken');
  var fs = require('fs');

  var cert = fs.readFileSync('pk.pem');  
  var iat = Math.floor(Date.now() / 1000) ;
  var exp = Math.floor(Date.now() / 1000) + (req.params.expire*60);
  var sde = JSON.parse(decodeURIComponent(req.params.sde));
  jwt.sign({ iss: "https://liveperson.com", sub: req.params.name ,  iat: iat , exp: exp, lp_sdes:sde}, cert, { algorithm: 'RS256' }, function(err, token) {
    res.json({token:token});
  });
};
