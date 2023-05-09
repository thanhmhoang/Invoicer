const router = require('express').Router()

const userRoutes = require('./userRoutes')
const departmentRoutes = require('./departmentRoutes')
const invoiceRoutes= require('./invoiceRoutes')
const wholesalerRoutes= require('./wholesalerRoutes')

router.use('/users', userRoutes)
router.use('/departments', departmentRoutes)
router.use('/invoices', invoiceRoutes)
router.use('/wholesalers', wholesalerRoutes)

module.exports = router;