const router = require('express').Router()
const { Department, Invoice } = require("../../models")

router.get("/", async (req, res) => {
  try {
      const departmentData = await Department.findAll()
      res.status(200).json(departmentData)
  } catch (err) {
      console.log(err)
      res.status(500).json({ error: 'Cannot retrieve department data' })
  }
});


router.post('/', async(req, res) => {
    try {
        const departmentData = await Department.create({
            dept_name: req.body.dept_name,
        });

        res.status(200).json(departmentData)
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: 'Cannot create department' })
    }
});

router.get('/department-invoice', async (req, res) => {

    try {
      const data = await Department.findAll({
        include: [{ model: Invoice }]
      })
  
      res.status(200).json(data)
    } catch (err) {
      res.status(500).json({ error: 'Cannot retrieve department invoices' })

    }
  });
  
module.exports = router;