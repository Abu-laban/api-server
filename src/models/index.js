'use strict';

require('dotenv').config();

const POSTGRES_URI = process.env.DATABASE_URL

const { Sequelize, DataTypes } = require('sequelize');

const food = require('./food');
const clothes = require('./clothes');
const customer = require('./customer');

const Collection = require('./lib/collection-class');

var sequelize = new Sequelize(POSTGRES_URI, {
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        }
    }
});

const customerModel = customer(sequelize, DataTypes);
const foodModel = food(sequelize, DataTypes);
const clothesModel = clothes(sequelize, DataTypes);

customerModel.hasMany(foodModel, { sourceKey: 'id', foreignKey: 'customerId' });
customerModel.hasMany(clothesModel, { sourceKey: 'id', foreignKey: 'customerId' });
foodModel.belongsTo(customerModel, { foreignKey: 'customerId', targetKey: 'id' });
clothesModel.belongsTo(customerModel, { foreignKey: 'customerId', targetKey: 'id' });

const customerCollection = new Collection(customerModel);
const foodCollection = new Collection(foodModel);
const clothesllection = new Collection(clothesModel);

module.exports = {
    db: sequelize,
    Customer: customerCollection,
    Food: foodCollection,
    Clothes: clothesllection,
}