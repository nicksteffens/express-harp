var express = require("express");
var harp = require("harp");
var router = express.Router();
var data = require(__dirname + '/src/_harp.json');
var helpers = require(__dirname + '/lib/jade-helpers');

// routes
router.get('/', harp.mount(__dirname + "/src"))
router.get('/:name', function(req, res) {
  'use strict';
  var fullParam = req.params.name;
  var character = helpers.character(fullParam);
  var hostpath = req.hostname + req.path;
  var imagepath = req.hostname + '/images/'
  // does character exist
  if (character !== undefined) {
    res.render('name', { character: character, hostpath: hostpath, imagepath: imagepath});

  // Just go back to landing
  } else {
    res.redirect('/');
  }

});

module.exports = router;