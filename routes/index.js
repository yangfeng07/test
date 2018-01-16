var express = require('express');
var router = express.Router();
let  rd = require('rd');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/myTest', function(req, res, next) {
    res.render('myTestView', { title: 'This is my Test html!' });
});
//同步遍历文件
rd.eachSync('./views', function (f, s) {
    if(f.indexOf('.ejs')!=-1){
        let rF = f.split(`\\views\\`)[1].replace(/\\/g, "/");      //正反斜杠转换s
        let rF2 =   rF.split('.')[0];
        router.get('/'+rF, function(req, res) {
            res.render(rF, { title: rF });
        });
        router.get('/'+rF2, function(req, res) {
            res.render(rF, { title: rF });
        });
    }
});
module.exports = router;
