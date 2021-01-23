const express = require('express');
const path = require('path');
const fs = require('fs');
const router = express.Router();

router.post('/:name/:type', async (req, res, next) => {
    const dir = `./${req.params.name}/${req.params.type}`;
    const unix = Math.floor((new Date().getTime()) / 1000);
    if (!fs.existsSync(`data/${dir}`)) fs.mkdirSync(`data/${dir}`, {recursive: true});
    fs.writeFile(`data/${dir}/${unix}.json`, JSON.stringify(req.body), function (err) {
        if (err) throw err;
    }); 

    res.status(201).json();
});

module.exports = router;
