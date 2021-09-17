const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...

// GET ROUTE HERE

// Get shopping list from database ordered by purchase history and then by name
router.get('/', (req, res) => {
    const sqlText = `SELECT * FROM list ORDER BY ispurchased, name ASC;`;
    pool.query(sqlText)
        .then((result) => {
            console.log(`Got stuff back from the database`, result);
            res.send(result.rows); //send the list to the client
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); // Respond with an error
        })
})


//POST ROUTE HERE




//PUT ROUTE HERE
//send a query to update every item's purchase status to false
router.put('/list', (req, res) => {
    const sqlText = `UPDATE list SET ispurchased=false;`;
    pool.query(sqlText)
        .then((result) => {
            console.log(`Got stuff back from the database`, result);
            res.send(result.rows); //send the list to the client
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); // Respond with an error
        })
})





//PUT/item ROUTE HERE
router.put('/:id', (req, res) => {
    // making isPurchased true
    console.log('in PUT route for isPurchased true')
    const itemId = req.params.id;
    const sqlText = `UPDATE list 
                    SET isPurchased = true
                    where "id" = $1;`;
    pool.query(queryText, [itemId])
    .then((result) => {
        console.log('Successfully updated isPurchased!')
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error in PUT updating isPurchased.', error);
        res.sendStatus(500);
    })
})



//DELETE ROUTE HERE

router.delete('/list', (req,res) => {
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