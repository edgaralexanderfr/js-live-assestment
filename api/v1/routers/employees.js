const express = require('express');

const { Employee, EmployeeType, Shop } = require('../../../models');

const router = express.Router();

router.get('/api/v1/employees', async (req, res) => {
    try {
        let employees = await Employee.findAll({
            attributes: Employee.getPublicAttributes(),
            include: [
                {
                    model: EmployeeType,
                    as: 'type'
                },
                {
                    model: Shop,
                    as: 'shop'
                }
            ]
        });

        res.status(200).json(employees);
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: 'There was an error fetching the employees'
        });
    }
});

router.get('/api/v1/employees/:id', async (req, res) => {
    try {
        let employee = await Employee.findOne({
            attributes: Employee.getPublicAttributes(),
            where: {
                id: req.params.id
            },
            include: [
                {
                    model: EmployeeType,
                    as: 'type'
                },
                {
                    model: Shop,
                    as: 'shop'
                }
            ]
        });

        if (employee) {
            res.status(200).json(employee);
        } else {
            res.status(404).json({
                code: 404,
                message: 'Employee not found'
            });
        }
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: 'There was an error fetching the employee'
        });
    }
});

router.post('/api/v1/employees', async (req, res) => {
    try {
        let shopId = (req.body.shop && req.body.shop.id) ? req.body.shop.id : undefined;
        let typeId = (req.body.type && req.body.type.id) ? req.body.type.id : undefined;

        let employee = await Employee.create({
            name: req.body.name,
            telephone: req.body.telephone,
            address: req.body.address,
            shop_id: shopId,
            employee_type_id: typeId
        });

        res.status(201).json(employee);
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: 'There was an error creating the employee'
        });
    }
});

router.delete('/api/v1/employees/:id', async (req, res) => {
    try {
        await Employee.destroy({
            where: {
                id: req.params.id
            }
        });

        res.status(200).json({
            code: 200,
            message: 'Employee deleted correctly'
        });
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: 'There was an error deleting the employee'
        });
    }
});

module.exports = router;
