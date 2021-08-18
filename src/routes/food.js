'use strict';

const express = require('express');

const router = express.Router();

const { Food } = require('../models/index');

router.get('/food', getAllFood);
router.get('/food/:id', getFood);
router.post('/food', createFood);
router.put('/food/:id', updateFood);
router.delete('/food/:id', deleteFood);

async function getAllFood(req, res) {
    let foods = await Food.getAll();
    res.status(200).json(foods);
}

async function getFood(req, res) {
    let id = parseInt(req.params.id);
    let food = await Food.get(id);
    res.status(200).json(food);
}

async function createFood(req, res) {
    let newFood = req.body;
    let food = await Food.create(newFood);
    res.status(201).json(food);
}

async function updateFood(req, res) {
    let id = parseInt(req.params.id);
    let updateFood = req.body;
    let food = await Food.update(id, updateFood);
    res.status(201).json(food);
}


async function deleteFood(req, res) {
    let id = parseInt(req.params.id);
    let food = await Food.delete(id);
    res.status(204).json(food);
}


module.exports = router;