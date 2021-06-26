const express = require('express');

const router = express.Router();

router.route('/')
    .get((req, res) => {
        res.status(200).json({
            message: 'landed in user get route'
        })
    })
    .post((req, res) => {
        res.status(201).json({
            message: 'landed in user post route'
        })
    })
    .put((req, res) => {
        res.status(201).json({
            message: 'landed in user put route'
        })
    })
    .delete((req, res) => {
        res.sendStatus(204);
    })

module.exports = router
