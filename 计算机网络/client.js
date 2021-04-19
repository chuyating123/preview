var net = require('net');

var client = new net.Socket();

client.setEncoding("utf8");
client.connect(8431, "localhost", function () {
    // console.log('111');
});
const readline = require("readline");
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
rl.question('input:',function(answer){
        client.write(answer);
    })


client.on("data", function (data) {

    console.log('已接收到服务器发送的数据：' + data);
  
});