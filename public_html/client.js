var socket = io.connect('http://localhost:3000');
//connect with server  طلب اتصال بالسيرفر

var username  = document.getElementById('username');
var message   = document.getElementById('message');
var send 	  = document.getElementById('send');
var chat 	  = document.getElementById('chat');
var boradcast = document.getElementById('boradcast');

send.addEventListener('click',function(){

if(!(message.value === '')){
// ارسال إلى السيرفر

     socket.emit('message',{
		username:username.value,
		message:message.value,
      });
// امسح صندوق الرسالة
        message.value = '';

}

});


//////////
message.addEventListener("keydown", ({key}) => {


    if (key === "Enter"){
		event.preventDefault();
		if(!(message.value === '')){
        // ارسال إلى السيرفر

socket.emit('message',{
	username:username.value,
	message:message.value,
});
//   امسح صندوق الرسالة
message.value = '';

	}
}
});
////////////////

message.addEventListener('keypress',function(){
	 // ارسال إلى السيرفر

	socket.emit('borad',{
		username:username.value
	});
});


 // استقبال من السيرفر
socket.on('new_msg',function(data){
 boradcast.innerHTML = "";

 chat.innerHTML += '<div class="container"><strong>'+data.username+':</strong>'+data.message+'</div>';
});


 // استقبال من السيرفر
 socket.on('new_borad',function(data){
	boradcast.innerHTML = '<strong>'+data.username+': </strong> write message <img src="/image/write.gif" style="width:25px;height:20px" />';
});
   