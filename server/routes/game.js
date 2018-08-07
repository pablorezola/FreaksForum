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
            2033,
            1979,
            28513,
            4,
            17907,
            24868,
            15852,
            4656,
            7886,
            16130,
            11199,
            1184,
            1906
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
            res.json(response);
        }).catch(error => {
            throw error;
        });
    });
    //XBOX ONE
    router.get('/xbox', (req, res, next) => {
        const arr2 = [];
    client.games({
        ids: [
            27395,
            18645,
            75932,
            18869,
            20454,
            79740,
            75867,
            54167,
            38782,
            14232,
            83765,
            4796,
            83776,
            36856
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
            throw error;
        });
    });
    //N.Switch
    router.get('/switch', (req, res, next) => {
        const arr3 = [];
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

