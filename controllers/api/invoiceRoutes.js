const router = require('express').Router();
const { Invoice, Department } = require('../../models');

router.get("/", async (req, res) => {
    try {
        const invoiceData = await Invoice.findAll()
        res.status(200).json(invoiceData)
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: 'Failed to retrieve invoice data' })
    }
});

router.get("/:id", async (req, res) => {
    try {
        const invoiceData = await Invoice.findOne({
            where: {
                id: req.params.id
            }
        })

        if(!invoiceData) {
            res.status(200).json({message: "No Data found with that ID!"})
        }
        res.status(200).json(invoiceData)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})


router.get("/department/:deptId", async (req, res) => {
    try {
        const invoiceData = await Invoice.findAll({
            where: {
                department_id: req.params.deptId
            }
        })

        if(!invoiceData) {
            res.status(200).json({message: "No Data found with that ID!"})
        }
        res.status(200).json(invoiceData)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})


router.post('/', async (req, res) => {
    try {
        const invoiceData = await Invoice.create({
            invoice_num: req.body.invoice_num,
            description: req.body.description,
            pay_amount: req.body.pay_amount,
            pay_date: req.body.pay_date,
            department: req.body.department
        });

        res.status(200).json(invoiceData);
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: 'Cannot create invoice' });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const invoiceData = await Invoice.update(res.params.id, {
            invoice_num: req.body.invoice_num,
            description: req.body.description,
            pay_amount: req.body.pay_amount,
            pay_date: req.body.pay_date,
            department: req.body.department
        });

        if (!invoiceData) {
            res.status(404).json({ message: "No invoice with this ID found!" })
            return;
        };
        res.status(200).json(invoiceData)
    } catch (err) {
        res.status(500).json({ error: 'Failed to update invoice' });
    }
});

module.exports = router;