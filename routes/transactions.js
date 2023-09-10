const router = require('express').Router()
const client = require('../client')

router.get('/:txId', async (req, res) => {
        try {
            const tx = await client.getRawTransaction(req.params.txId);
            const decoded = await client.decodeRawTransaction(tx);
            const fee = await calculateTransactionFee(decoded)
            res.json({...decoded, fee})
        } catch (e) {
            console.log(e)
        }
    }
)

async function calculateTransactionFee(transaction)  {
    const voutSum = transaction.vout.map(v => v.value ?? 0).reduce((acc, next) => acc + next, 0);

    const inputTxs = await Promise.all(transaction.vin.map(async (v) => await getTxValue(v.txid)));
    const vinSum = inputTxs.reduce((prev, next) => prev + next, 0);

    return vinSum - voutSum;
}

async function getTxValue(tx) {
    const inputTransactionRaw = await client.getRawTransaction(tx);
    const inputTransactionDecoded = await client.decodeRawTransaction(inputTransactionRaw);
    return inputTransactionDecoded.vout.map(v => v.value).reduce((acc, next) => acc + next, 0);
}

module.exports = router