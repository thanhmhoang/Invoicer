// import models
const Department = require("./Department");
const Invoice = require("./Invoice");
const User = require("./User");
const Wholesaler = require("./Wholesaler");

// Departments belongs to Users
Department.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: "CASCADE",
});

// Invoice belongs to Department
Invoice.belongsTo(Department, {
    foreignKey: "department_id",
    onDelete: "CASCADE",
});

// Invoice belongs to Wholesaler
Invoice.belongsTo(Wholesaler, {
    foreignKey: "wholesaler_id",
    onDelete: "CASCADE",
});

// Wholesalers belongs to Users
Wholesaler.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: "CASCADE",
});

// Users have many Departments
User.hasMany(Department, {
    foreignKey: "user_id",
});

// Department has many Invoices
Department.hasMany(Invoice, {
    foreignKey: "department_id",
});

// Wholesaler has many Invoices
Wholesaler.hasMany(Invoice, {
    foreignKey: "wholesaler_id",
});


module.exports = {
    Department,
    Invoice,
    User,
    Wholesaler,
};