var express = require('express');
var router = express.Router();
const bcrypt = require('bcryptjs');

router.post('/register', async (req, res) => {
  const { fullName, username, email, password } = req.body;

  if (!fullName || !username || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const existingUser = users.find(user => user.username === username || user.email === email);
  if (existingUser) {
    return res.status(400).json({ message: 'Username or Email already exists' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = {
    fullName,
    username,
    email,
    password: hashedPassword
  };

  users.push(newUser);

  res.status(201).json({ message: 'User registered successfully' });
});


router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  if (username !== user.username) {
    return res.status(400).json({ message: 'Invalid username' });
  }


  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: 'Invalid password' });
  }

  res.json({ message: 'Login successful' });
});


module.exports = router;
