const db = require('../config/db');

const Event = {
  create: async ({ name, date, location }) => {
    const [result] = await db.execute(
      'INSERT INTO events (name, date, location) VALUES (?, ?, ?)',
      [name, date, location]
    );
    return result;
  },

  update: async (id, { name, date, location }) => {
    const [result] = await db.execute(
      'UPDATE events SET name = ?, date = ?, location = ? WHERE id = ?',
      [name, date, location, id]
    );
    return result;
  },

  delete: async (id) => {
    const [result] = await db.execute('DELETE FROM events WHERE id = ?', [id]);
    return result;
  }
};

module.exports = Event;

