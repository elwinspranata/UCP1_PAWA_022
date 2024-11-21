const express = require('express');
const router = express.Router();

let poolData = [
    { id: 1, name: 'Kolam Renang A', location: 'Bandung', capacity: 50 },
    { id: 2, name: 'Kolam Renang B', location: 'Jakarta', capacity: 30 }
];

router.get('/', (req, res) => {
    res.render('index', { pools: poolData });
});

router.post('/add', (req, res) => {
    const newPool = {
        id: poolData.length + 1,
        name: req.body.name,
        location: req.body.location,
        capacity: req.body.capacity
    };
    poolData.push(newPool);
    res.redirect('/');
});

router.post('/delete', (req, res) => {
    poolData = poolData.filter(pool => pool.id !== parseInt(req.body.id));
    res.redirect('/');
});

module.exports = router;
