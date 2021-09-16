const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...

// GET ROUTE HERE




//POST ROUTE HERE




//PUT ROUTE HERE






//PUT/item ROUTE HERE




//DELETE ROUTE HERE

router.delete('/', (req,res) => {
    const queryText = `DELETE * FROM "list";`
    pool.query(queryText).then(result => {
        res.sendStatus(200);
    }).catch.catch(error => {
        console.log('error in deleting database');
        res.sendStatus(500);
    })
})


//DELETE/item ROUTE HERE



module.exports = router;