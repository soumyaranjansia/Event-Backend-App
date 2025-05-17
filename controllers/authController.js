exports.register = async (req, res) => {
  const { email, password } = req.body;
  // Add your logic to insert into database
  res.json({ message: 'User registered successfully', email });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  // Dummy login
  res.json({ message: 'User logged in', email });
};

exports.logout = async (req, res) => {
  res.json({ message: 'User logged out' });
};

