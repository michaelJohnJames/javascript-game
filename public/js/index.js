 var teamNames = [
   { name: "Eagles",
     hintOne: "NFC East",
     hintTwo: "Philadelphia"},
  { name: "Cowboys",
  hintOne: "NFC East",
hintTwo: "Dallas"},
{ name: "Redskins",
hintOne: "NFC East",
hintTwo: "Washington"},
{ name: "Giants",
hintOne: "NFC East",
hintTwo: "New York"
}]

var letters = document.getElementById('letters');
var a = document.getElementById('letter-a');
var b = document.getElementById('letter-b');
var c = document.getElementById('letter-c');
var d = document.getElementById('letter-d');
var e = document.getElementById('letter-e');
var f = document.getElementById('letter-f');
var g = document.getElementById('letter-g');
var h = document.getElementById('letter-h');
var i = document.getElementById('letter-i');
var j = document.getElementById('letter-j');
var k = document.getElementById('letter-k');
var l = document.getElementById('letter-l');
var m = document.getElementById('letter-m');
var n = document.getElementById('letter-n');
var o = document.getElementById('letter-o');
var p = document.getElementById('letter-p');
var q = document.getElementById('letter-q');
var r = document.getElementById('letter-r');
var s = document.getElementById('letter-s');
var t = document.getElementById('letter-t');
var u = document.getElementById('letter-u');
var v = document.getElementById('letter-v');
var w = document.getElementById('letter-w');
var x = document.getElementById('letter-x');
var y = document.getElementById('letter-y');
var z = document.getElementById('letter-z');

function startGame() {


}



function log() {
  console.log("A");
}

a.addEventListener('click', log);



letters.textContent = teamNames[0].name;
