
var express = require('express');
var socket  = require('socket.io');
var path = require('path');
var serveStatic = require('serve-static');


var application = express();
var server = application.listen(3000,function(){
	console.log('Your Server Is runing at http:/localhost:3000');
});

 
application.use(serveStatic(path.join(__dirname, 'public_html')));

 // استقبال من السيرفر

var sio = socket(server);
  
 // استقبال من السيرفر
 sio.on('connection',function(visitor){

    console.log('we have a new visitor as id=>',visitor.id);



        visitor.on('message',function(data){  // استقبال من السيرفر

		sio.sockets.emit('new_msg',data);      //  إرسال من السيرفر لكل المستخدمين




        visitor.on('borad',function(data){// استقبال من السيرفر
        visitor.broadcast.emit('new_borad',data);  //  إرسال من السيرفر لكل المستخدمين
        });
    

	});
});
 