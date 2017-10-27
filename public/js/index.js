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
var x = document.getElementById('letter-x');
var y = document.getElementById('letter-y');
var z = document.getElementById('letter-z');
var hintbox = document.getElementById('hint-box');
var random = Math.floor(Math.random() * (31 - 0) + 0);
var tries = document.getElementById('tries');
var replay = document.querySelector('.restart');
var state = teamNames[random].name.split("").fill("_");


//var answer = teamNames[x].name;
//let state = answer.split("").fill("_");
//word.replace(/[abcdefghijklmnopqrstuvwxyz]/ig, "_");

function startGame() {
  var answer = teamNames[random].name;
  letters.textContent = answer.split("").fill("_");
  //letters.textContent = answer.replace(/./ig, " _ ");
  hintbox.textContent = "";



  function giveHint() {
    hintbox.textContent = teamNames[random].hintOne;

  }
}

  //word.replaceAll(".", "_");
// let str = letters.textContent = teamNames[x].name;
//teamNames[x].name.replaceAll(_);

//}

function giveHint() {
  hintbox.textContent = teamNames[random].hintOne;

}


function takeGuess(guess) {
    //let tries = document.getElementById('tries');
    //let guesses = "";
  let answer = Array.from(teamNames[random].name);
//let state = answer.split("").fill("_");
//console.log(answer);
  for ( let i = 0; i < answer.length; i++ ) {
  let letter = answer[i];
   if ( letter === guess ) {
    state[i] === guess }
}
   };

//   else { console.log(no match) }
//    word.replace(/_/ig, letter);
//  } else { tries++ }

  //word.replace(/_/ig, userGuess);
  //Array.from(word);
  //for (let character of Array.from(word) ) {
  //  i=0; i < Array.from(word).length; i++ ) {
    //Array.from(word).forEach(log());
  //  if (/
  //};
//if (word.includes(letter)) {
  //return word.replace(/_/ig, letter);

//function gameEnd() {
//  if (word === )
//}


// function letter(guess) {
//  if (/[guess]/ig) {
//    console.log(guess);//replace letter
//  } else { tries++;

//  };
//}

startGame();
a.addEventListener('click', () => takeGuess("a"));
b.addEventListener('click', () => takeGuess("b"));
c.addEventListener('click', () => takeGuess("c"));
d.addEventListener('click', () => takeGuess("d"));
e.addEventListener('click', () => takeGuess("e"));
f.addEventListener('click', () => takeGuess("f"));
g.addEventListener('click', () => takeGuess("g"));
h.addEventListener('click', () => takeGuess("h"));
i.addEventListener('click', () => takeGuess("i"));
j.addEventListener('click', () => takeGuess("j"));
k.addEventListener('click', () => takeGuess("k"));
l.addEventListener('click', () => takeGuess("l"));
m.addEventListener('click', () => takeGuess("m"));
n.addEventListener('click', () => takeGuess("n"));
o.addEventListener('click', () => takeGuess("o"));
p.addEventListener('click', () => takeGuess("p"));
q.addEventListener('click', () => takeGuess("q"));
r.addEventListener('click', () => takeGuess("r"));
s.addEventListener('click', () => takeGuess("s"));
t.addEventListener('click', () => takeGuess("t"));
u.addEventListener('click', () => takeGuess("u"));
v.addEventListener('click', () => takeGuess("v"));
w.addEventListener('click', () => takeGuess("w"));
x.addEventListener('click', () => takeGuess("x"));
y.addEventListener('click', () => takeGuess("y"));
z.addEventListener('click', () => takeGuess("z"));
hint.addEventListener('click', giveHint);
replay.addEventListener('click', game);
})()
