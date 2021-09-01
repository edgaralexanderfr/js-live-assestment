const express = require('express');

const employeesRouter = require('./api/v1/routes/employees');

const app = express();
app.use(employeesRouter);

app.use(express.json());

app.listen(process.env.PORT || 4444, () => {
    console.log('Running the server...');
});
