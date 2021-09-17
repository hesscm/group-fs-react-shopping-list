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

router.post('/', (req, res) => {
    // getting object info from client
    const itemToAdd = req.body;
    // query to send to database with sanitized data
    const queryText = `INSERT INTO list ("name", "quantity", "unit") VALUES ($1, $2, $3);`
    pool.query(queryText, [itemToAdd.name,
    itemToAdd.quantity,
    itemToAdd.unit]).then(result => {
        // send status code 200 if successful posting
        res.sendStatus(200);
    }).catch(result => {
        // send status code 500 if error encountered
        res.sendStatus(500);
    })
})


//PUT ROUTE HERE
//send a query to update every item's purchase status to false
router.put('/', (req, res) => {
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

router.delete('/', (req, res) => {
    const queryText = `DELETE FROM list *;`
    pool.query(queryText).then((result) => {
        res.sendStatus(200);
    }).catch(error => {
        console.log('error in deleting database');
        res.sendStatus(500);
    })
})


//DELETE/item ROUTE HERE
router.delete('/item/:id', (req, res) => {
    console.log(req.params);
    const itemId = req.params.id;
    console.log('in DELETE /item/:id');
    const queryItem = `DELETE FROM "list" WHERE "id" = $1;`
    pool.query(queryItem, [treatId]).then((listDB) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('error in DELETE /list/item', error);
        res.sendStatus(500);
    });
});

module.exports = router;