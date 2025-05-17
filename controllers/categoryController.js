const Category = require('../models/Category');

exports.addCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const result = await Category.create(name);
    res.status(201).json({ message: 'Category added', categoryId: result.insertId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    await Category.update(id, name);
    res.json({ message: 'Category updated' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    await Category.delete(id);
    res.json({ message: 'Category deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

