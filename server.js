
const express = require('express');
const app = express(); // 建立一個 Express 伺服器

app.get('/', function(req, res){
    res.send('hello world');
});

app.set('view engine','ejs'); // 要先安裝 ejs: npm install ejs --save
app.get('/template', function(req, res){
    var user = {name: 'Tom'}
    res.render('index', {user: user});
    // 不用寫 views/index.ejs 因為 express 預設 template會放在 views 資料夾裡面
});

app.get('/json', function(req, res){
    var user = {name: 'Tom'}
    res.json(user);
});

app.get('/about', function(req, res) {
    res.send('Send about page!')
});

app.listen(3000, function(){
    console.log('Example app is running on port 3000!');
}); // 告訴server 聽取 3000 ，成功後回顯示 ... 訊息