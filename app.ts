/* import express from 'express'
import compression from 'compression'
import session from 'express-session'
import bodyParser from 'body-parser'
import mongo from 'mongo'
import path from 'path'
import mongoose from 'mongoose'
import bluebird from 'bluebird'
import { MONGODB_URI, SESSION_SECRET } from './util/secrets'

const MongoStore = mongo(session)

// Controllers (route handlers)
// import * as contactController from "./controllers/contact";
import default from '../../ketang/src/snippet';
import app from './appBack';

// 创建 express 服务
const app = express()

const mongoUrl = MONGODB_URI
mongoose.Promise = bluebird

// 建立和 MongoDB 的连接,如果建立失败就退出
mongoose
  .connect(
    mongoUrl,
    { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
  )
  .then(() => {})
  .catch((err) => {
    console.log('连接错误,请确认MongoDB 正在运行' + err)
    process.exit()
  })

// 设置服务器响应的端口,可以自己在 env 上配置
app.set('port', process.env.PORT || 3000)
// 配置请求压缩
app.user(compression)
// body-parser是非常常用的一个express中间件，作用是对post请求的请求体进行解析。使用非常简单，以下两行代码已经覆盖了大部分的使用场景。
app.use(bodyParser.json)
app.use(bodyParser.urlencoded({ extended: true }))

// 使用 session 中间件建立 session 连接,并且使用 MongoDB 进行存储
/*二、session的工作流程：
当浏览器访问服务器并发送第一次请求时，服务器端会创建一个session对象，生成一个类似于key,value的键值对， 然后将key(cookie)返回到浏览器(客户)端，浏览器下次再访问时，携带key(cookie)，找到对应的session(value) 。 客户的信息都保存在session中。

 三、express-session的常用参数:
secret:一个String类型的字符串，作为服务器端生成session的签名。
name:返回客户端的key的名称，默认为connect.sid,也可以自己设置。
resave:(是否允许)当客户端并行发送多个请求时，其中一个请求在另一个请求结束时对session进行修改覆盖并保存。
默认为true。但是(后续版本)有可能默认失效，所以最好手动添加。
saveUninitialized:初始化session时是否保存到存储。默认为true， 但是(后续版本)有可能默认失效，所以最好手动添加。
cookie:设置返回到前端key的属性，默认值为{ path: ‘/', httpOnly: true, secure: false, maxAge: null } 。

express-session的一些方法:

Session.destroy() :删除session，当检测到客户端关闭时调用。

Session.reload() :当session有修改时，刷新session。

Session.regenerate() ：将已有session初始化。

Session.save() ：保存session。 */
/*
app.use(
  session({
    resave: true,
    saveUninitialized: SESSION_SECRET,
    store: new MongoStore({
      url: mongoUrl,
      autoReconnect: true
    })
  })
)


export default app */
export const a = 1
