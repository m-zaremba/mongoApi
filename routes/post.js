const express = require('express');
const { getPosts, createPost } = require('../controllers/post.js');
const validator = require('../validators/index.js');

const router = express.Router();

router.get('/', getPosts);
router.post('/post', validator.createPostValidator, createPost);

module.exports = router;
