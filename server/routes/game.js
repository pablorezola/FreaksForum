const express = require('express');
const router = express.Router();
const igdb = require('igdb-api-node').default;
const key = process.env.KEY;
const client = igdb(key);


router.get('/ps4', (req, res, next) => {
    const arr1 = [];

    //PS4

    client.games({
        ids: [
            21933,
            11776,
            36796,
            76258,
            74384,
            52676,
            89991,
            32859,
            19042,
            42941,
            9536,
            41614,
            19880,
            24221,
            52717,
            9637,
            36798,
            20391,
            19250,
            34894,
            86388,
            86389,
            86268,
            86347,
        ]
    }, [
            'name',
            'summary',
            'rating',
            'websites',
            'screenshots',
        ]).then(response => {
            console.log(response.body)
            response.body.forEach(element => {

            });
            arr1.push(response);
            console.log(response);
            res.json(response);
        }).catch(error => {
            console.log(error);
            throw error;

        });
    });
    //XBOX ONE
    router.get('/xbox', (req, res, next) => {
        const arr2 = [];
    client.games({
        ids: [
            20907,
            39046,
            39044,
            39047,
            36144,
            86225,
            18113,
            55121,
            11215,
            51385,
            27376,
            19889,
            78754,
            82120,
            17520,
            34812,
            41605,
            82376,
        ]
    }, [
            'name',
            'summary',
            'rating',
            'websites',
            'screenshots',
        ]).then(response => {
            response.body.forEach(element => {
            });
            arr2.push(response);
            res.json(response);
        }).catch(error => {
            console.log(error)
            throw error;
        });
    });
    //N.Switch
    router.get('/switch', (req, res, next) => {
        const arr3 = [];
    client.games({
        ids: [
             11065,
            15100,
            14902,
            15169,
            15187,
            3088,
            23501,
            15460,
            15464,
            11075,
            25108,
            9498,
            11081,
            15555,
            15445,
            14369,
        ]
    }, [
            'name',
            'summary',
            'rating',
            'websites',
            'screenshots',
        ]).then(response => {
            response.body.forEach(element => {

            });
            arr3.push(response);
            res.json(response);
        }).catch(error => {
            throw error;
        });
    });


    // Steam
    router.get('/steam', (req, res, next) => {
        const arr4 = [];
    client.games({
        ids: [
            9767,
            9911,
            10737,
            9707,
            11584,
            11587,
            11586,
            6781,
            11646,
            8390,
            9649,
            8993,
            26868,
            27140,
            26363,
            27194,
            27207,
            9066,
            25295,
            27337,
            27339,
            8767,
        ]
    }, [
            'name',
            'summary',
            'rating',
            'websites',
            'screenshots',
        ]).then(response => {
            response.body.forEach(element => {
            });
            arr4.push(response);
            res.json(response);
        }).catch(error => {
            throw error;
        });
    });




module.exports = router;

