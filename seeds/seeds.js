const sequelize = require("../config/connection");
const { User, Department, Invoice, Wholesaler } = require("../models")

const userDataJson = require('./userData.json');
const departmentDataJson = require('./departmentData.json');
const wholesalerDataJson = require('./wholesalerData.json');
const invoiceDataJson = require('./invoiceData.json');


const seedDatabase = async ()=>{
  try{
      await sequelize.sync({force:true});
      await User.bulkCreate(userDataJson,{individualHooks:true});
      await Department.bulkCreate(departmentDataJson);
      await Wholesaler.bulkCreate(wholesalerDataJson);
      await Invoice.bulkCreate(invoiceDataJson);
      console.log("all done!")
      process.exit(0);
  } catch (err){
      console.log(err)
      process.exit(1);
  }
}
  
  seedDatabase();