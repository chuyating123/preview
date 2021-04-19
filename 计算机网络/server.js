var net = require('net');

var server = net.createServer();

server.on("connection", function (socket) {

    console.log("客户端与服务器端已建立")

    socket.setEncoding("utf8");

    socket.on("data", function (data) {

        console.log("已接收到的数据：" + data);
      if(data.indexOf('+')!= -1)  {
       var  arr =data.split('+');
        var a= parseInt(arr[0])+parseInt(arr[1]);
        socket.write("确认数据 " +a);
      }
      else{
        socket.write("确认数据 " + data.toUpperCase());
      }
     

    });

});

server.listen(8431, 'localhost', function () {

    console.log("listened");

});