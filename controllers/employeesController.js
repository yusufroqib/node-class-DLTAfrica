const data = {} 
data.employees = require('../../model/employees.json')

const getAllEmployees = (req, res) => {
        res.json(data.employees)
    }

const createNewEmployee = (req, res) => {
    res.json({
        "firstname": req.body.firstname, 
        "lastname": req.body.lastname
    })
}