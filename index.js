var QRcode = require("qrcode")
QRcode.toString('i am aakash', {type:"terminal"}, function(err, url){
    console.log(url)
})