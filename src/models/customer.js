'use strict';

const customer = (sequelize, DataTypes) => sequelize.define('customer', {
    customerName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = customer;