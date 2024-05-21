const express = require('express');
const router = express.Router();
const redis = require('../redis');

router.get('/', async (req, res) => {
  const addedTodos = await redis.getAsync('added_todos') || 0;

  res.send({
    'added_todos': addedTodos
  });
});

module.exports = router;