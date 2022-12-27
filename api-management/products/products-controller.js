var express = require('express');
var router = express.Router();


const { GetAllProducts } = require('./products-actions');
const { GetProductsById } = require('./products-actions');
const { AddProduct } = require('./products-actions');
const { UpdateProductDetails } = require('./products-actions');
const { deleteProduct } = require('./products-actions');



/* GetAllProducts */

router.get('/all', async (req, res) => {
    res.send(await GetAllProducts());
});

/* ******************* */



/* GetProductsById */

router.get('/id', async (req, res) => {
    res.send(await GetProductsById(req.body));
});

/* ******************* */



/* AddProduct */

router.post('/add', async (req, res) => {
    res.send(await AddProduct(req.body));
});

/* ******************* */



/* UpdateProductDetails */

router.put('/update', async (req, res) => {
    res.send(await UpdateProductDetails(req.body));
});

/* ******************* */



/* deleteProduct */

router.delete('/delete', async (req, res) => {
    res.send(await deleteProduct(req.body));
});

/* ******************* */


module.exports = router;