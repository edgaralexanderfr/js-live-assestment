const storage = require('../storage');

module.exports = class Employee {
    constructor(props) {
        this.name = props.name || null;
        this.type = props.type || null;
        this.telephone = props.telephone || null;
        this.address = props.address || null;
        this.employmentDate = props.employmentDate || null;
        this.shopId = props.shopId || null;
    }
    
    static async getAll() {
        const employees = await storage.getAll('employees');

        return employees;
    }
}