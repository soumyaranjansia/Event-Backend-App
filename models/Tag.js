const db = require('../config/db');

const Tag = {
  create: async (name) => {
    const [result] = await db.execute('INSERT INTO tags (name) VALUES (?)', [name]);
    return result;
  },

  update: async (id, name) => {
    const [result] = await db.execute('UPDATE tags SET name = ? WHERE id = ?', [name, id]);
    return result;
  },

  delete: async (id) => {
    const [result] = await db.execute('DELETE FROM tags WHERE id = ?', [id]);
    return result;
  }
};

module.exports = Tag;

