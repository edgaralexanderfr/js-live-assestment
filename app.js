const express = require('express');
require('dotenv').config();

const employeesTypesRouter = require('./api/v1/routers/employees/types');
const employeesRouter = require('./api/v1/routers/employees');
const shopsRouter = require('./api/v1/routers/shops');

const app = express();

app.use(express.json());

app.use(employeesTypesRouter);
app.use(employeesRouter);
app.use(shopsRouter);


app.listen(process.env.APP_PORT || 3000, () => {
    console.log(`Running the server at port ${process.env.APP_PORT || 3000}...`);
});
