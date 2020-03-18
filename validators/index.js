/* eslint-disable consistent-return */
exports.createPostValidator = (req, res, next) => {
  req.check('title', 'Write a title').notEmpty();
  req.check('title', 'Title must be longer than 3 characters').isLength({
    min: 3,
    max: 150,
  });
  req.check('body', 'Write a body').notEmpty();
  req.check('body', 'Body must be between 3 to 2000 characters').isLength({
    min: 3,
    max: 2000,
  });

  const errors = req.validationErrors();

  if (errors) {
    const firstError = errors.map((error) => error.msg)[0];
    return res.status(400).json({ error: firstError });
  }

  // Process to the next middleware
  next();
};
