const express = require('express');
var fs = require('fs');
const router = express.Router();

router.post('/:name/:type', async (req, res, next) => {
    const dir = `./${req.params.name}/${req.params.type}`;
    const unix = Math.floor(new Date().getTime() / 1000);
    if (!fs.existsSync(`./${req.params.name}/`)) fs.mkdirSync(dir, {recursive: true});
    fs.writeFile(`${dir}/${unix}.json`, JSON.stringify(req.body), function (err) {
        if (err) throw err;
    }); 

    res.status(201).json();
});

module.exports = router;
