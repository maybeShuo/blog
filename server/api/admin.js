import Express from 'express'

const router = Express.Router()

router.get('/getUsers', (req, res) => {
    res.send('后端api处理')
})

module.exports = router