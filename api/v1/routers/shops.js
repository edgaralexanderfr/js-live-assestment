const express = require('express');

const { Shop } = require('../../../models');

const router = express.Router();

router.get('/api/v1/shops', async (req, res) => {
    try {
        let shops = await Shop.findAll({
            attributes: Shop.getPublicAttributes()
        });

        res.status(200).json(shops);
    } catch (error) {
        console.log(error)
        res.status(500).json({
            code: 500,
            message: 'There was an error fetching the shops'
        });
    }
});

router.get('/api/v1/shops/:id', async (req, res) => {
    try {
        let shop = await Shop.findOne({
            attributes: Shop.getPublicAttributes(),
            where: {
                id: req.params.id
            }
        });

        if (shop) {
            res.status(200).json(shop);
        } else {
            res.status(404).json({
                code: 404,
                message: 'Shop not found'
            });
        }
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: 'There was an error fetching the shop'
        });
    }
});

router.post('/api/v1/shops', async (req, res) => {
    try {
        let shop = await Shop.create({
            name: req.body.name,
            address: req.body.address,
            telephone: req.body.telephone,
        });

        res.status(201).json(shop);
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: 'There was an error creating the shop'
        });
    }
});

module.exports = router;
