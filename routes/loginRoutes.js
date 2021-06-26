const express = require('express');

const router = express.Router();

router.route('/')
    .post((req, res) => {
        res.status(200).json({
            message: 'landed in login post route'
        })
    });

module.exports = router;
