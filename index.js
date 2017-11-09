var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
// var usernames = ["user1","user2","user3","user4", "user5", "user6", "user7"];
// var usernames = [];
// var name = '';
// var i = 0;
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});
// function pageScroll() {
//     window.scrollBy(0,1);
//     scrolldelay = setTimeout(pageScroll,10);
// }
io.on('connection', function(socket){
  // console.log(socket.username);
  // name = prompt("Enter Username: ");
  // usernames.push(name);
  // console.log(usernames[i]);
  socket.on('chat message', function(msg){
    io.emit('chat message', "user: "+msg);
  });
});

http.listen(process.env.PORT || 3000, function(){
  console.log('listening on *:3000');
});