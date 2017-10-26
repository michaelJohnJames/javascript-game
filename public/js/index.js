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
  letters.textContent = teamNames[x].name.replace(/./ig, " _ ");

}

  //word.replaceAll(".", "_");
// let str = letters.textContent = teamNames[x].name;
//teamNames[x].name.replaceAll(_);

//}

function giveHint() {
  hintbox.textContent = teamNames[x].hintOne;

}

function log() {
  console.log("good");
}

function guess(letter) {
//var letter = button.value;
let tries = document.getElementById('tries');
letters.textContent = teamNames[x].name.replace(/./ig, " _ ");
  let word = teamNames[x].name;
  hiddenWord = Array.from(word);
for ( let it = 0; it < hiddenWord.length; it++ );
 if ( hiddenWord.includes(letter) ) {
   letter.replace("_", letter ) } else {
      tries++ ;
   }
//   else { console.log(no match) }
//    word.replace(/_/ig, letter);
//  } else { tries++ }

  //word.replace(/_/ig, userGuess);
  //Array.from(word);
  //for (let character of Array.from(word) ) {
  //  i=0; i < Array.from(word).length; i++ ) {
    //Array.from(word).forEach(log());
  //  if (/
  };
//if (word.includes(letter)) {
  //return word.replace(/_/ig, letter);




// function letter(guess) {
//  if (/[guess]/ig) {
//    console.log(guess);//replace letter
//  } else { tries++;

//  };
//}

startGame();
a.addEventListener('click', guess("a"));
b.addEventListener('click', guess("b"));
c.addEventListener('click', guess(c));
d.addEventListener('click', guess(d));
e.addEventListener('click', guess(e));
f.addEventListener('click', guess(f));
g.addEventListener('click', guess(g));
h.addEventListener('click', guess(h));
i.addEventListener('click', guess("i"));
j.addEventListener('click', guess(j));
k.addEventListener('click', guess(k));
l.addEventListener('click', guess(l));
m.addEventListener('click', guess(m));
n.addEventListener('click', guess(n));
o.addEventListener('click', guess(o));
p.addEventListener('click', guess(p));
q.addEventListener('click', guess(q));
r.addEventListener('click', guess(r));
s.addEventListener('click', guess(s));
t.addEventListener('click', guess(t));
u.addEventListener('click', guess(u));
v.addEventListener('click', guess(v));
w.addEventListener('click', guess(w));
xx.addEventListener('click', guess(x));
y.addEventListener('click', guess(y));
z.addEventListener('click', guess(z));
hint.addEventListener('click', giveHint);

})()
