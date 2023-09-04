const express = require('express')
const app = express()
const port = 3000

const { createPool } = require("mysql")
const Pool = createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "tsak1",
    port: '3307'

})



app.get('/data/Users', function (req, res) {
    Pool.query(`select * from Users`, (error, result) => {
        if (error) {
            res.send(error)

        }
        res.send(result)

    })

})

app.get('/data/:id/:Name/:City/:ContactNo/:Gender', function (req, res) {
    Pool.query(`INSERT INTO users VALUES("${req.params.id}","${req.params.Name}","${req.params.City}","${req.params.ContactNo}","${req.params.Gender}") `, (error, result) => {
        if (error) {
            res.send(error)

        }
        res.send(result)

    })

})

app.get('/data/delete/:id', function (req, res) {
    Pool.query(`DELETE FROM users where id=${req.params.id}`, (error, result) => {
        if (error) {
            res.send(error)

        }
        res.send(result)

    })

})

app.get('/data/update/:Name/:id', function (req, res) {
    Pool.query(`UPDATE users SET Name="${req.params.Name}" WHERE Id ="${req.params.id}"`, (error, result) => {
        if (error) {
            res.send(error)

        }
        res.send(result)
    })
});

// ----Product---

app.get('/product/Product', function (req, res) {
    Pool.query(`select * from product`, (error, result) => {
        if (error) {
            res.send(error)

        }
        res.send(result)

    })

})

app.get('/product/:productId/:productName/:productType/:productBrand/:productPrise', function (req, res) {
    Pool.query(`INSERT INTO product VALUES("${req.params.productId}","${req.params.productName}","${req.params.productType}","${req.params.productBrand}","${req.params.productPrise}") `, (error, result) => {
        if (error) {
            res.send(error)

        }
        res.send(result)
        console.log(result);

    })

})

app.get('/product/delete/:ProductId', function (req, res) {
    Pool.query(`DELETE FROM product where ProductId=${req.params.ProductId}`, (error, result) => {
        if (error) {
            res.send(error)

        }
        res.send(result)

    })

})

app.get('/product/update/:productName/:productId', function (req, res) {
    Pool.query(`UPDATE product SET productName="${req.params.productName}" WHERE productId ="${req.params.productId}"`, (error, result) => {
        if (error) {
            res.send(error)

        }
        res.send(result)
    })
});

// ---Fav---

app.get('/Fav', function (req, res) {
    Pool.query(`select * from favourite`, (error, result) => {
        if (error) {
            res.send(error)

        }
        res.send(result)

    })

})

app.get('/Fav/:UserId/:productId', function (req, res) {
    Pool.query(`INSERT INTO favourite VALUES("${req.params.UserId}","${req.params.productId}") `, (error, result) => {
        if (error) {
            res.send(error)

        }
        res.send(result)
        console.log(result);

    })

})

app.get('/Fav/:UserId', function (req, res) {
    Pool.query(`DELETE FROM favourite where UserId=${req.params.UserId}`, (error, result) => {
        if (error) {
            res.send(error)

        }
        res.send(result)

    })

})

app.get('/Fav/update/:productName/:productId', function (req, res) {
    Pool.query(`UPDATE product SET productName="${req.params.productName}" WHERE productId ="${req.params.productId}"`, (error, result) => {
        if (error) {
            res.send(error)

        }
        res.send(result)
    })
});

// ---fi---

app.get('/Find/findproduct/:userId', function (req, res) {
    let id = req.params.userId
    Pool.query(`select * from favourite`, (error, result) => {
        if (error) {
            console.log(error);
        }
        let dat = result.filter(e => e.UserId == id)
        console.log(result);
        res.send(dat)

    })

})

app.get('/Find/finduser/:productId', function (req, res) {
    let id = req.params.productId
    Pool.query(`select * from favourite`, (error, result) => {
        if (error) {
            console.log(error);
        }
        let dat = result.filter(e => e.productId == id)
        console.log(result);
        res.send(dat)

    })

})




app.listen(port, () => {
    console.log(`using this port http://localhost:${port}/`);
})
