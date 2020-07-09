const router = require('express').Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/user');
const config = require('config');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');

// @route POST api/auth
// @desc Auth user
// @access Public
// comment
router.post('/', (req, res) => {
    const { userName, password } = req.body;

    //validation
    if (!userName || !password) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }

    //Check for existing user
    User.findOne({ userName }).then((user) => {
        if (!user) return res.status(400).json({ msg: 'User does not exist' });

        // Validate password
        bcrypt.compare(password, user.password).then((isMatch) => {
            if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

            jwt.sign({ id: user.id }, config.get('jwtSecret'), { expiresIn: 10800 }, (err, token) => {
                if (err) throw err;
                res.json({
                    token,
                    user: {
                        id: user.id,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        userName: user.userName,
                    },
                });
            });
        });
    });
});

// @route   GET api/auth/user
// @desc    Get uer data
// @access  Private
router.get('/user', auth, (req, res) => {
    User.findById(req.user.id)
        .select('-password')
        .then((user) => res.json(user));
});

module.exports = router;
