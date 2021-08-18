'use strict';

const express = require('express');

const router = express.Router();

const { Clothes } = require('../models/index');

router.get('/clothes', getAllClothes);
router.get('/clothes/:id', getClothes);
router.post('/clothes', createClothes);
router.put('/clothes/:id', updateClothes);
router.delete('/clothes/:id', deleteClothes);

async function getAllClothes(req, res) {
    let clothes = await Clothes.getAll();
    res.status(200).json(clothes);
}

async function getClothes(req, res) {
    let id = parseInt(req.params.id);
    let clothes = await Clothes.get(id);
    res.status(200).json(clothes);
}

async function createClothes(req, res) {
    let newClothes = req.body;
    let clothes = await Clothes.create(newClothes);
    res.status(201).json(clothes);
}

async function updateClothes(req, res) {
    let id = parseInt(req.params.id);
    let updateClothes = req.body;
    let clothes = await Clothes.update(id, updateClothes);
    res.status(201).json(clothes);
}


async function deleteClothes(req, res) {
    let id = parseInt(req.params.id);
    let clothes = await Clothes.delete(id);
    res.status(204).json(clothes);
}


module.exports = router;