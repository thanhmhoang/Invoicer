const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Invoice extends Model { }

Invoice.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        invoice_num: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isNumeric: true,
            }
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                max: 30,
            },
        },
        pay_amount: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isNumeric: true,
            }
        },
        pay_date: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isDate: true,
            }
        },
        department: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                max: 20,
            },
        },
        department_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'department',
                key: 'id',
            },
        },
        wholesaler_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'wholesaler',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'invoice',
    }
);

module.exports = Invoice;