const express = require('express');
const router  = express.Router();
const igdb = require('igdb-api-node').default;
const client = igdb('0675154b1f690583c9a861cc1e81e214');

router.get('/',(req, res ,next)=>{
    client.games({
        fields: '*', // Return all fields
        limit: 5, // Limit to 5 results
        offset: 15 // Index offset for results
    }).then(object => {
        res.json(object);
    }).catch(error => {
        throw error;
    });
});

module.exports = router;