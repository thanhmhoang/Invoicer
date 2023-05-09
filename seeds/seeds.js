const sequelize = require("../config/connection");
const { User, Department, Invoice, Wholesaler } = require("../models")

const userData = require('./userData.json');
const departmentData = require('./departmentData.json');
const wholesalerData = require('./wholesalerData.json');
const invoiceData = require('./invoiceData.json');


const seedDatabase = async ()=>{
  try{
      await sequelize.sync({force:true});
      const userData = await User.bulkCreate(user,{individualHooks:true});
      const departmentData = await Department.bulkCreate(department);
      const wholesalerData = await Wholesaler.bulkCreate(wholesaler);
      const invoiceData = await Invoice.bulkCreate(invoice);
      console.log("all done!")
      process.exit(0);
  } catch (err){
      console.log(err)
  }
}
  
  seedDatabase();