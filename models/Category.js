const db = require('../config/db');

const Category = {
  create: async (name) => {
    const [result] = await db.execute('INSERT INTO categories (name) VALUES (?)', [name]);
    return result;
  },

  update: async (id, name) => {
    const [result] = await db.execute('UPDATE categories SET name = ? WHERE id = ?', [name, id]);
    return result;
  },

  delete: async (id) => {
    const [result] = await db.execute('DELETE FROM categories WHERE id = ?', [id]);
    return result;
  }
};

module.exports = Category;

