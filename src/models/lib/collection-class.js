'use strict';

class Collection {
    constructor(model) {
        this.data = model;
    }

    async create(obj) {
        let newObj = await this.data.create(obj);
        return newObj;
    }

    async get(id) {
        let object = await this.data.findOne({ where: { id: id } });
        return object;
    }

    async getAll() {
        let objects = await this.data.findAll();
        return objects;
    }

    async update(id, obj) {
        let object = await this.data.findOne({ where: { id } });
        let newObj = await object.update(obj);
        return newObj;
    }

    async delete(id) {
        await this.data.destroy({ where: { id } });
    }
}

module.exports = Collection;
