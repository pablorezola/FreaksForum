const express = require('express');
const router = express.Router();
const igdb = require('igdb-api-node').default;
const key = process.env.KEY;
const client = igdb(key);
const Game = require('../models/Game');


router.get('/ps4', (req, res, next) => {
    //const arr1 = [];

    Game.find({type:"PlayStation"}).then((game)=>{
        console.log(game)
        res.json(game)
    }).catch(error => {
        console.log(error);
        throw error;

    }); 

    //PS4
   /*  client.games.toString();
    client.games({
        ids: [
            2033,
            8500,
            2957,
            1979,
            2920,
            3152,
            16735,
            3256,
            18655,
            3094,
            4,
            16765,
            6632,
            4756,


        ]
    }, [
            'name',
            'summary',
            'rating',
            'screenshots',
        ]).then(response => {
            arr1.push(response);
            
            //mi detalle tesnico

            // arr1.forEach(x => {
            //     x.body.forEach(y=>{
            //         console.log(y.name)
            //         return new Game({
            //             name: y.name,
            //             summary: y.summary,
            //             rating: y.rating,
            //             screenshots: y.screenshots,
            //             type:'PlayStation'
            //         }).save();
            //     });
            // });
            res.json(response);
        }).catch(error => {
            console.log(error);
            throw error;

        }); */
});
// //XBOX ONE
router.get('/xbox', (req, res, next) => {

    Game.find({type:"Xbox"}).then((game)=>{
        console.log(game)
    res.json(game)
    }).catch(error => {
        console.log(error);
        throw error;

    }); 

    //const arr2 = [];
   /*  client.games.toString();
    client.games({
        ids: [
            121,
            5541,
            4758,
            5333,
            19407,
            5328,
            7685,
            5308,
            5330,
            4786,
            7614,
            4847,
            4785,
            3025,
            1981,
            5606,
            7897,
            2050,


        ]
    }, [
            'name',
            'summary',
            'rating',
            'screenshots',
        ]).then(response => {
            arr2.push(response);
            
            res.json(response);
        }).catch(error => {
            console.log(error);
            throw error;

        }); */
});
//N.Switch
router.get('/switch', (req, res, next) => {

    Game.find({type:"Nintendo"}).then((game)=>{
        console.log(game)
    res.json(game)
    }).catch(error => {
        console.log(error);
        throw error;

    }); 

    /* const arr3 = [];
    client.games.toString();
    client.games({
        ids: [
            6556,
            11070,
            86361,
            38983,
            64011,
            11529,
            19175,
            28409,
            7767,
            1408,
            1404,
            27081,
            19109,
            27298,
            47576,
            26165,


        ]
    }, [
            'name',
            'summary',
            'rating',
            'screenshots',
        ]).then(response => {
            arr3.push(response);
            
            res.json(response);
        }).catch(error => {
            console.log(error);
            throw error;

        }); */
});


// // Steam
router.get('/steam', (req, res, next) => {

    Game.find({type:"Steam"}).then((game)=>{
        console.log(game)
    res.json(game)
    }).catch(error => {
        console.log(error);
        throw error;

    }); 



    /* const arr4 = [];
    client.games.toString()
    client.games({
        ids: [
            20395,
            23850,
            23888,
            23942,
            23943,
            23993,
            24050,
            24053,
            24440,
            24441,
            24445,
            24446,
            19293,
            24481,
            24642,
            24646,

        ]
    }, [
            'name',
            'summary',
            'rating',
            'screenshots',
        ]).then(response => {
            arr4.push(response);


            res.json(response);
        }).catch(error => {
            console.log(error);
            throw error;

        }); */
});




module.exports = router;

