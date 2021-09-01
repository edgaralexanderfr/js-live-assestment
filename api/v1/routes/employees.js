const express = require('express');

// const storage = require('../storage');
const Employee = require('../models/employee');

const router = express.Router();

router.get('/api/v1/employees', async (req, res) => {
    try {
        const employees = await Employee.getAll();
        res.send(employees);
    } catch (error) {
        console.log(error)
        res.status(500).send({
            code: 500,
            message: 'Error fetching the employees.'
        })
    }
});

router.get('/api/v1/employees/:id', (req, res) => {
    res.send({ msg: 'Hello!' });
});

router.post('/api/v1/employees', (req, res) => {
    res.send({ msg: 'Hello!' });
});

router.patch('/api/v1/employees/:id', (req, res) => {
    res.send({ msg: 'Hello!' });
});

router.delete('/api/v1/employees/:id', (req, res) => {
    res.send({ msg: 'Hello!' });
});

module.exports = router;
