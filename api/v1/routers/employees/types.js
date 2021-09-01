const express = require('express');

const { EmployeeType } = require('../../../../models');

const router = express.Router();

router.get('/api/v1/employees/types', async (req, res) => {
    try {
        let employeeTypes = await EmployeeType.findAll({
            attributes: EmployeeType.getPublicAttributes()
        });

        res.status(200).json(employeeTypes);
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: 'There was an error fetching the employee types'
        });
    }
});

router.get('/api/v1/employees/types/:id', async (req, res) => {
    try {
        let employeeType = await EmployeeType.findOne({
            attributes: EmployeeType.getPublicAttributes(),
            where: {
                id: req.params.id
            }
        });

        if (employeeType) {
            res.status(200).json(employeeType);
        } else {
            res.status(404).json({
                code: 404,
                message: 'Employee type not found'
            });
        }
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: 'There was an error fetching the employee type'
        });
    }
});

module.exports = router;
