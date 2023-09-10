const router = require('express').Router()
const client = require('../client')

const transactions = require('./transactions')
const blocks = require('./blocks')

router.use('/transactions', transactions)
router.use('/blocks', blocks)

router.get("/", async (req, res) => {
    try {
        client.getBlockchainInfo().then((response) => res.json(response)).catch(res.error)
    } catch (e) {
        console.log(e)
    }
})

module.exports = router
