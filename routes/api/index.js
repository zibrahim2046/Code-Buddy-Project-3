const router = require('express').Router();
const bookRoutes = require('./books');
const userRoutes = require('./users');
const authRoutes = require('./auth');
const itemsRoutes = require('./items');
// Book routes
router.use('/books', bookRoutes);
router.use('/users', userRoutes);
router.use('/auth', authRoutes);
router.use('/items', itemsRoutes);
module.exports = router;
