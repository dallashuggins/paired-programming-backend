const express = require('express');
const router = express.Router();

router.get('/', async function (req, res) {
  try {
      console.log("GET Route #1 success!");
      res.status(200).json({success: true});
  } catch (e) {
      console.log("GET Route #1 error", e.message);
      res.status(400).send(e.message);
  }
});

module.exports = router;
