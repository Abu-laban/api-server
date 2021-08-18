'use strict';

const food = (sequelize, DataTypes) => sequelize.define('food', {
    foodName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    foodType: {
        type: DataTypes.STRING,
    },
    customerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

module.exports = food;