var express = require('express');
var app = express();
//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

var questions = [{
        data: 21,
        num: 444,
        age: 12
    },
    {
        data: 456,
        num: 678,
        age: 131
    }
];

var myPorts = require('./port.js');
app.use(express.static(__dirname + '/public'));
//写个接口
app.get('/index', function(req, res) {
    res.status(200),
        res.json(myPorts.indexList)
});

app.get('/detail', function(req, res) {
    let goodsId = req.query['goodsId'];
    let imgsSrc;
    switch (goodsId) {
        case 'goods0001':
            imgsSrc = myPorts.detailImgSrc[0];
            break;
        case 'goods0002':
            imgsSrc = myPorts.detailImgSrc[1];
            break;
        case 'goods0003':
            imgsSrc = myPorts.detailImgSrc[2];
            break;        
        default:
            break;
    }
    res.json(imgsSrc)
    // if(req.query['goodsId'] == 'goods0001') {
    //     console.log('true');
    //     res.json(myPorts.detailImgSrc[0])
    // }
    console.log(req.query);
})

//配置服务端口
var server = app.listen(3006, function () {

var host = server.address().address;

 var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
})