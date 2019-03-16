const express = require('express');
const app = express();

//设置跨域访问
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});


app.get('/index', (req, res) => {
  res.send(index)
});
app.get('/service', (req, res) => {
  res.send(service)
});

app.listen(3000, err => {
  if (!err) console.log('服务器启动成功~');
  else console.log(err);
});
