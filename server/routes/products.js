const express = require('express');
const router = express.Router();
const Product = require('../model/product')

router.get('', function (req, res) {
    Product.find({}).then(foundProducts => { res.json(foundProducts); }).catch(error => { console.error(error); });
})

router.get('/:productId', function (req, res) {
    const productId = req.params.productId;
    Product.findById(productId).then(foundProduct => { res.json(foundProduct); }).catch(error => { res.status (422).send({errors: [{title: 'Product error', details: 'Product not found!'}]})});
})

module.exports = router;