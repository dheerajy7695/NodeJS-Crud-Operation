'use strict';

const Product = require('../models/product.model');

module.exports.getAll = function (req, res) {
    Product.find({}, (err, response) => {
        if (err || !response) {
            console.log('getAll function has error', err);
            res.send({ status: 400, message: 'Product not found or user dose not access' });
        } else {
            console.log('getAll function executed successfully');
            res.send(response);
        }
    })
};

module.exports.product_details = function (req, res) {
    Product.findById(req.params.id, (err, response) => {
        if (err || !response) {
            console.log('product_details function has error', err);
            res.send({ status: 404, message: 'Product not found or user dose not access' });
        } else {
            console.log('product_details function executed successfully');
            res.send(response);
        }
    })
};

module.exports.product_create = function (req, res) {
    let product = new Product({
        productId: req.body.productId,
        name: req.body.name,
        price: req.body.price
    })
    product.save((err, response) => {
        if (err || !response) {
            console.log('product_create function has error', err);
            res.send({ status: err.status || 400, message: err.message || 'Product not found or user dose not access' });
        } else {
            console.log('product_create function executed successfully');
            res.send(response);
        }
    })
};

module.exports.product_update = function (req, res) {

    Product.findByIdAndUpdate(req.params.id, { $set: req.body }, (err, response) => {
        if (err || !response) {
            console.log('product_update function has error', err);
            res.send({ status: err.status || 400, message: err.message || 'Product not found or user dose not access' });
        } else {
            console.log('product_update function executed successfully');
            res.send(response);
        }
    })
};

module.exports.product_delete = function (req, res) {

    Product.findByIdAndRemove(req.params.id, (err, response) => {
        if (err || !response) {
            console.log('product_delete function has error', err);
            res.send({ status: 400, message: 'Product not found or user dose not access' });
        } else {
            console.log('product_delete function executed successfully');
            res.send(response);
        }
    })
};