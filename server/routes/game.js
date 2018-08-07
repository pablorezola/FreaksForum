const express = require('express');
const router = express.Router();
const axios = require("axios");
const igdb = require('igdb-api-node').default;
const client = igdb('0675154b1f690583c9a861cc1e81e214');



router.get('/', (req, res, next) => {
    /* let arr = [];
    axios.get(`https://api-2445582011268.apicast.io/platforms/48`, {
        headers: { 'user-key': '0675154b1f690583c9a861cc1e81e214' }
    }).then(object => {
        console.log(object.data[0].games);
            // Promise.all(
            //     object.data[0].games.map(item => axios.get(`https://api-2445582011268.apicast.io/games/${item}`, {
            //         headers: { 'user-key': '0675154b1f690583c9a861cc1e81e214' }
            //     }))
            // ).then(result => console.log(result))
            //     .catch(error => {
            //         console.log(error);
            //         throw error;
            //     });
    }).catch(error => {
                 console.log(error);
                 throw error;
             });;
 */
});





module.exports = router;

