const express = require('express');
const User = require('../models/users.model'); // Assuming the model is in the models folder
const router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

/* Register a new user */

router.post('/register', async (req, res) => {
  const { fullName, username, email, password } = req.body;

  // Validate input
  if (!fullName || !username || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // Check if username or email already exists
    const existingUser = await User.findOne({
      $or: [{ username }, { email }],
    });
    if (existingUser) {
      return res.status(400).json({ message: 'Username or Email already exists' });
    }

    // Create and save the new user without hashing the password
    const newUser = new User({
      fullName,
      username,
      email,
      password, // Storing plain text password
    });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

/* Login a user */
router.post('/login', async (req, res) => {
  const { username, password, role } = req.body;

  // Validate input
  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  try {
    // Find user by username
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: 'Invalid username' });
    }

    // Compare the provided password with the stored plain text password
    if (password !== user.password) {
      return res.status(400).json({ message: 'Invalid password' });
    }

    if(role === user.role) {
      return res.status(400).json({ message: 'Invalid Role selection' });
    }
    // Respond with success
    res.json({ message: 'Login successful' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

module.exports = router;
