/**
  * api请求server
  */
import Express from 'express'
import mongoose from 'mongoose'
import config from '../../config/config'
import bodyParser from 'body-parser'

const port = config.apiPort

const app = new Express()

app.use('/', require('./main'))
app.use('/admin', require('./admin'))


mongoose.Promise = require('bluebird')
mongoose.connect(`mongodb://${config.dbHost}:${config.dbPort}/blog`, err => {
    if(err) {
        console.log(err, '数据库连接失败')
        return
    }

    console.log('数据库连接成功')
        
    app.listen(port, err => {
        if(err) {
            console.error('err:', err)
        } else {
            console.info(`===> api server is running at ${config.apiHost}:${config.apiPort}`)
        }
    })
    
})