'use strict';

const express = require('express');

const router = express.Router();

const { Customer } = require('../models/index');

router.get('/customer', getAllCustomer);
router.get('/customer/:id', getCustomer);
router.post('/customer', createCustomer);
router.put('/customer/:id', updateCustomer);
router.delete('/customer/:id', deleteCustomer);

async function getAllCustomer(req, res) {
    let customer = await Customer.getAll();
    res.status(200).json(customer);
}

async function getCustomer(req, res) {
    let id = parseInt(req.params.id);
    let customer = await Customer.get(id);
    res.status(200).json(customer);
}

async function createCustomer(req, res) {
    let newCustomer = req.body;
    let customer = await Customer.create(newCustomer);
    res.status(201).json(customer);
}

async function updateCustomer(req, res) {
    let id = parseInt(req.params.id);
    let updateCustomer = req.body;
    let customer = await Customer.update(id, updateCustomer);
    res.status(201).json(customer);
}


async function deleteCustomer(req, res) {
    let id = parseInt(req.params.id);
    let customer = await Customer.delete(id);
    res.status(204).json(customer);
}


module.exports = router;