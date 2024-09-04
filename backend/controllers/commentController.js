const Comment = require('../models/Comment');

exports.createComment = async (req, res) => {
  try {
    const { text } = req.body;
    const comment = new Comment({ text, user: req.userId });
    await comment.save();
    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getComments = async (req, res) => {
  try {
    const comments = await Comment.find().populate('user').populate('replies.user');
    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
