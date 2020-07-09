const router = require('express').Router();
const booksController = require('../../controllers/booksController');
const bcrypt = require('bcryptjs');
const User = require('../../models/user');
const config = require('config');
const jwt = require('jsonwebtoken');

// @route POST api/users
// @desc Register new user
// @access Public

router.post("/", (req, res) => {
    const { firstName, lastName, userName, password } = req.body;

    //validation
    if(!firstName || !lastName || !userName || !password ) {
        return res.status(400).json({ msg: "Please enter all fields" });
    }
    if(password.length < 8) {
        return res.status(400).json({ msg: "Password must be atleast 8 characters. Please try a new password." })
    }

    //Check for existing user
    User.findOne({ userName })
        .then(user => {
            if(user) return res.status(400).json({ msg: "User already exists" })

            const newUser= new User({
                firstName,
                lastName,
                userName,
                password
            });

            // Creating salt and hash
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if(err) throw err;
                    newUser.password = hash;
                    newUser.save()
                        .then(user => {

                            jwt.sign(
                                { id: user.id },
                                config.get('jwtSecret'),
                                { expiresIn: 10800 }, 
                                (err, token) => {
                                    if(err) throw err;
                                     res.json({
                                        token,
                                        user: {
                                            id: user.id,
                                            firstName: user.firstName,
                                            lastName: user.lastName,
                                            userName: user.userName
                                        }
                                    });
                                }
                            )

                           
                        });
                })
            })

        })
});

// router.get("/", auth, async(req, res) => {
//     const user = await User.findById(req.user);
//     res.json(user)
// })


module.exports = router;