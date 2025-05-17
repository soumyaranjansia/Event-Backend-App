const Tag = require('../models/Tag');

exports.addTag = async (req, res) => {
  try {
    const { name } = req.body;
    const result = await Tag.create(name);
    res.status(201).json({ message: 'Tag added', tagId: result.insertId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateTag = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    await Tag.update(id, name);
    res.json({ message: 'Tag updated' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteTag = async (req, res) => {
  try {
    const { id } = req.params;
    await Tag.delete(id);
    res.json({ message: 'Tag deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

