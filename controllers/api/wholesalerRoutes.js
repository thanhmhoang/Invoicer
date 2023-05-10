const router = require('express').Router()
const { Wholesaler } = require('../../models')

router.get("/", async (req, res) => {
    try {
        const wholesaleData = await Wholesaler.findAll()
        res.status(200).json(wholesaleData)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

router.post('/', async (req, res) => {
    try {
        const wholeSaleData = await Wholesaler.create({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone
        });

        res.status(200).json(wholeSaleData)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
});

module.exports = router;