(function game() {
 var teamNames = [
   { name: "Eagles",
     hintOne: "NFC East"},
  { name: "Cowboys",
  hintOne: "NFC East"},
{ name: "Redskins",
hintOne: "NFC East"},
{ name: "Giants",
hintOne: "NFC East"
},
{ name: "Buccaneers",
hintOne: "NFC South"},
{ name: "Falcons",
hintOne: "NFC South"},
{ name: "Panthers",
hintOne: "NFC South"},
{ name: "Saints",
hintOne: "NFC South"},
{ name: "Seahawks",
hintOne: "NFC West"},
{ name: "Forty Niners",
hintOne: "NFC West"},
{ name: "Rams",
hintOne: "NFC West"},
{ name: "Cardinals",
hintOne: "NFC West"},
{ name: "Vikings",
hintOne: "NFC North"},
{ name: "Packers",
hintOne: "NFC North"},
{ name: "Bears",
hintOne: "NFC North"},
{ name: "Lions",
hintOne: "NFC North"},
{ name: "Patriots",
hintOne: "AFC East"},
{ name: "Jets",
hintOne: "AFC East"},
{ name: "Bills",
hintOne: "AFC East"},
{ name: "Dolphins",
hintOne: "AFC East"},
{ name: "Ravens",
hintOne: "AFC North"},
{ name: "Steelers",
hintOne: "AFC North"},
{ name: "Bengals",
hintOne: "AFC North"},
{ name: "Browns",
hintOne: "AFC North"},
{ name: "Titans",
hintOne: "AFC South"},
{ name: "Jaguars",
hintOne: "AFC South"},
{ name: "Colts",
hintOne: "AFC South"},
{ name: "Texans",
hintOne: "AFC South"},
{ name: "Raiders",
hintOne: "AFC West"},
{ name: "Chargers",
hintOne: "AFC West"},
{ name: "Broncos",
hintOne: "AFC West"},
{ name: "Chiefs",
hintOne: "AFC West"}
];

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
var xx = document.getElementById('letter-x');
var y = document.getElementById('letter-y');
var z = document.getElementById('letter-z');
var hintbox = document.getElementById('hint-box');
var x = Math.floor(Math.random() * (31 - 0) + 0);

var tries = document.getElementById('tries');




//word.replace(/[abcdefghijklmnopqrstuvwxyz]/ig, "_");

function startGame() {
  letters.textContent = teamNames[x].name.replace(/./ig, " _ ");;

}

  //word.replaceAll(".", "_");
// let str = letters.textContent = teamNames[x].name;
//teamNames[x].name.replaceAll(_);

//}

function giveHint() {
  hintbox.textContent = teamNames[x].hintOne;

}

function log(letter) {
  console.log(letter);
  tries++;
}


// function letter(guess) {
//  if (/[guess]/ig) {
//    console.log(guess);//replace letter
//  } else { tries++;

//  };
//}

startGame();
a.addEventListener('click', log);
b.addEventListener('click', log);
c.addEventListener('click', log);
d.addEventListener('click', log);
e.addEventListener('click', log);
f.addEventListener('click', log);
g.addEventListener('click', log);
h.addEventListener('click', log);
i.addEventListener('click', log);
j.addEventListener('click', log);
k.addEventListener('click', log);
l.addEventListener('click', log);
m.addEventListener('click', log);
n.addEventListener('click', log);
o.addEventListener('click', log);
p.addEventListener('click', log);
q.addEventListener('click', log);
r.addEventListener('click', log);
s.addEventListener('click', log);
t.addEventListener('click', log);
u.addEventListener('click', log);
v.addEventListener('click', log);
w.addEventListener('click', log);
xx.addEventListener('click', log);
y.addEventListener('click', log);
z.addEventListener('click', log);
hint.addEventListener('click', giveHint);

})()
