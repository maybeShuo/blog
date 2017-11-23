import Express from 'express'

const router = Express.Router()

router.get('/user', (req, res) => {
    res.send('前端页面路由')
})

module.exports = router