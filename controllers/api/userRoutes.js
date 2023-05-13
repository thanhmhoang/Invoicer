const router = require('express').Router()
const { User } = require('../../models')

router.get("/", async (req, res) => {
    try {
        const userData = await User.findAll()
        res.status(200).json(userData)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
});

router.post('/', async (req, res) => {
    try {
        const newUser = await User.create({
            username: req.body.username,
            password: req.body.password,
        });
        req.session.save(() => {
            req.session.userId = newUser.id;
            req.session.username = newUser.username;
            req.session.loggedIn = true;
            res.json(newUser);
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({
            where: {
                username: req.body.username,
            },
        });
        if (!user) {
            res.status(400).json({ message: 'Please enter a valid username and password!' });
            return;
        }
        const validPassword = user.checkPassword(req.body.password);
        if (!validPassword) {
            res.status(400).json({ message: 'Please enter a valid username and password!' });
            return;
        }
        req.session.save(() => {
            req.session.userId = user.id;
            req.session.username = user.username;
            req.session.loggedIn = true;
            res.json({ user, message: 'You are now logged in!' });
        });
    } catch (err) {
        res.status(400).json({ message: 'Please enter a valid username and password!' });
    }
});

router.delete('/logout', (req,res) => {
    try {
      req.session.destroy()
      res.status(200).json({msg:"logged out successfully"})
    } catch (error) {
      console.log(error)
      res.status(500).json(error)
    }
});

router.post('/signup', async (req, res) => {
  try {
    const { email, password } = req.body;
    // Perform input validation
    if (!email || !password) {
      return res.status(400).json({ message: "Please provide an email and password." });
    }
    const user = await User.create({ email, password });
    req.session.userId = user.id;
    req.session.loggedIn = true;
    res.sendStatus(200);
  } catch (error) {
    console.error('Error creating user', error);
    res.status(500).json({ message: "Sign up failed. Please try again." });
  }
});

module.exports = router;