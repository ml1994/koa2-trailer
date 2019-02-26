const ejs = require('ejs')
const pug = require('pug')
const Koa = require('koa')
const { htmlTpl, ejsTpl, pugTpl } = require('./tpl')

const app = new Koa()

app.use(async (ctx, next) => {
  ctx.type = 'text/html; charset=utf-8'
  // ctx.body = ejs.render(ejsTpl, {
  //   name: 'macq'
  // })
  ctx.body = pug.render(pugTpl, {
    name: 'macq'
  })
})

app.listen(4455)