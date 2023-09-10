const router = require('express').Router()
const client = require('../client')

router.get('/hash/:hash', async ({ params }, res) => {
    try {
        client.getBlock(params.hash).then(response => res.json(response)).catch(res.error)
    } catch (e) {
        console.log(e)
    }
})

router.get('/height/:size', async ({ params }, res) => {
    try {
        client.getBlockHash(parseInt(params.size))
            .then((response) => client.getBlock(response).then(response => res.json(response)).catch(console.log))
            .catch(res.error);
    } catch (e) {
        console.log(e)
    }

})

module.exports = router