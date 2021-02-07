const common=require('./common')
const utils=require('./utils')

//css文件引入
require('./style.css')

common.info('hello common'+ utils.add(1,2))