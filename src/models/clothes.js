'use strict';

const clothes = (sequelize, DataTypes) => sequelize.define('clothes', {
    clothesName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    clothesType: {
        type: DataTypes.STRING,
    },
    customerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

module.exports = clothes;