const express = require('express');
const model = require('../model/profile');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', {
    title: 'Profile',
    profile: model.getProfile(),
  });
});

module.exports = router;
