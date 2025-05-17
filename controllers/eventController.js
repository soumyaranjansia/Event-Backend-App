const Event = require('../models/Event');

exports.createEvent = async (req, res) => {
  try {
    const { name, date, location } = req.body;
    const result = await Event.create({ name, date, location });
    res.status(201).json({ message: 'Event created', eventId: result.insertId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, date, location } = req.body;
    await Event.update(id, { name, date, location });
    res.json({ message: 'Event updated' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;
    await Event.delete(id);
    res.json({ message: 'Event deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

