const express = require('express')

const app = express()

app.get('/api/customers', (req, res) => {
    const customers = [
        {id: 1, firstName: 'John1', lastName: 'Doe1'},
        {id: 2, firstName: 'John2', lastName: 'Doe2'},
        {id: 3, firstName: 'John3', lastName: 'Doe3'},
        {id: 4, firstName: 'John4', lastName: 'Doe4'},
        {id: 5, firstName: 'John5', lastName: 'Doe5'},
        {id: 6, firstName: 'John6', lastName: 'Doe6'},
        {id: 7, firstName: 'John7', lastName: 'Doe7'},
        {id: 8, firstName: 'John8', lastName: 'Doe8'}
    ];

    res.json(customers)
})

const port = 5000

app.listen(port, () => console.log(`Server started on port ${port}`))