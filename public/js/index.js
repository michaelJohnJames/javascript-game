
  var teamNames = [{
      name: "eagles",
      hintOne: "NFC East"
    },
    {
      name: "cowboys",
      hintOne: "NFC East"
    },
    {
      name: "redskins",
      hintOne: "NFC East"
    },
    {
      name: "giants",
      hintOne: "NFC East"
    },
    {
      name: "buccaneers",
      hintOne: "NFC South"
    },
    {
      name: "falcons",
      hintOne: "NFC South"
    },
    {
      name: "panthers",
      hintOne: "NFC South"
    },
    {
      name: "saints",
      hintOne: "NFC South"
    },
    {
      name: "seahawks",
      hintOne: "NFC West"
    },
    {
      name: "fortyniners",
      hintOne: "NFC West"
    },
    {
      name: "rams",
      hintOne: "NFC West"
    },
    {
      name: "cardinals",
      hintOne: "NFC West"
    },
    {
      name: "vikings",
      hintOne: "NFC North"
    },
    {
      name: "packers",
      hintOne: "NFC North"
    },
    {
      name: "bears",
      hintOne: "NFC North"
    },
    {
      name: "lions",
      hintOne: "NFC North"
    },
    {
      name: "patriots",
      hintOne: "AFC East"
    },
    {
      name: "jets",
      hintOne: "AFC East"
    },
    {
      name: "bills",
      hintOne: "AFC East"
    },
    {
      name: "dolphins",
      hintOne: "AFC East"
    },
    {
      name: "ravens",
      hintOne: "AFC North"
    },
    {
      name: "steelers",
      hintOne: "AFC North"
    },
    {
      name: "bengals",
      hintOne: "AFC North"
    },
    {
      name: "browns",
      hintOne: "AFC North"
    },
    {
      name: "titans",
      hintOne: "AFC South"
    },
    {
      name: "jaguars",
      hintOne: "AFC South"
    },
    {
      name: "colts",
      hintOne: "AFC South"
    },
    {
      name: "texans",
      hintOne: "AFC South"
    },
    {
      name: "raiders",
      hintOne: "AFC West"
    },
    {
      name: "chargers",
      hintOne: "AFC West"
    },
    {
      name: "broncos",
      hintOne: "AFC West"
    },
    {
      name: "chiefs",
      hintOne: "AFC West"
    }
  ];
  const form = document.forms[0];
  var replay = document.getElementById('restart');
  function giveHint() {
    //var random = Math.floor(Math.random() * (31 - 0) + 0);
    var hintbox = document.getElementById('hint-box');
    hintbox.textContent = teamNames[random].hintOne;

  }


  var letters = document.getElementById('letters');
  const guess = form.guess.value;
  //var a = document.getElementById('letter-a');
  //var b = document.getElementById('letter-b');
  //var c = document.getElementById('letter-c');
  //var d = document.getElementById('letter-d');
  //var e = document.getElementById('letter-e');
  //var f = document.getElementById('letter-f');
  //var g = document.getElementById('letter-g');
  //var h = document.getElementById('letter-h');
  //var i = document.getElementById('letter-i');
  //var j = document.getElementById('letter-j');
  //var k = document.getElementById('letter-k');
  //var l = document.getElementById('letter-l');
  //var m = document.getElementById('letter-m');
  //var n = document.getElementById('letter-n');
  //var o = document.getElementById('letter-o');
  //var p = document.getElementById('letter-p');
  //var q = document.getElementById('letter-q');
  //var r = document.getElementById('letter-r');
  //var s = document.getElementById('letter-s');
  //var t = document.getElementById('letter-t');
  //var u = document.getElementById('letter-u');
  //var v = document.getElementById('letter-v');
  //var w = document.getElementById('letter-w');
  //var x = document.getElementById('letter-x');
  //var y = document.getElementById('letter-y');
  //var z = document.getElementById('letter-z');
  //var random = Math.floor(Math.random() * (31 - 0) + 0);
  //var random = Math.floor(Math.random() * (31 - 0) + 0);
//let random, state, answer;
  var hintbox = document.getElementById('hint-box');
  var numTries = document.getElementById('tries');
  //const random = Math.floor(Math.random() * (31 - 0) + 0);
//console.log(random);

  //const answer = teamNames[random].name;
  var triesCounter = numTries.textContent;
  var random = Math.floor(Math.random() * (31 - 0) + 0);
  var state = teamNames[random].name.split("").fill('_');
  //console.log(random);
 var answer = teamNames[random].name;
  //console.log(random);
//let random, state, answer, teanNames;





  //var answer = teamNames[x].name;
  //let state = answer.split("").fill("_");
  //word.replace(/[abcdefghijklmnopqrstuvwxyz]/ig, "_");


  function restartGame() {
random = "";
    //var random = Math.floor(Math.random() * (31 - 0) + 0);
    console.log(random);
    let hintBox = "";
    let state = "";
    let answer = "";

    startGame();

};

  function startGame() {
  //random = "";

    var random = Math.floor(Math.random() * (31 - 0) + 0);
    console.log(random);
    var hintbox = document.getElementById('hint-box');
    var numTries = document.getElementById('tries');
    var state = teamNames[random].name.split("").fill('_');
    console.log(random);
    var answer = teamNames[random].name;
    console.log(random);
    var triesCounter = numTries.textContent;


    letters.textContent = state.join(" ");
    hintbox.textContent = "";
    numTries.textContent = 5;
    document.getElementById("restart").classList.add('hidden');
    document.getElementById("result-box").classList.add("hidden");
  //}

  //function restart() {
  //  var random = Math.floor(Math.random() * (31 - 0) + 0);

  //  var hintbox = document.getElementById('hint-box');
  //  var numTries = document.getElementById('tries');
  //  var state = teamNames[random].name.split("").fill('_');
  //  var answer = teamNames[random].name;
  //  var triesCounter = numTries.textContent;

    //var answer = teamNames[random].name;
  //  letters.textContent = state.join(" ");
  //  hintbox.textContent = "";
  //  numTries.textContent = 5;
  //}
}
  function giveHint() {
    var hintbox = document.getElementById('hint-box');
    hintbox.textContent = teamNames[random].hintOne;
    console.log(random);
  }







//function validateGuess(guess) {

 //return guess && guess === /[abcdefghijklmnopqrstuvwxyz]/ig;

//  }




  //function takeGuess(guess) {
    //var random = Math.floor(Math.random() * (31 - 0) + 0);
  //  var state = teamNames[random].name.split("").fill('_');
    //var answer = teamNames[random].name;

    //var numTries = document.getElementById('tries');
    //var replay = document.querySelector('.restart');

    //let guesses = "";
    //let answer = Array.from(teamNames[random].name);

    //console.log(answer);
    //console.log(state);

    //for ( let i = 0; i < state.length; i++ ) {
    //guess.toUpperCase();
    //let letter = answer[i];
    // if ( letter === guess ) {
    //  state[i] = guess;
    //letters.textContent = state.join(" ");
    //}


    //numTries.textContent--;
  //}



  //window.alert("You Lost! Try again!")
  //  function loseGame() {
  //    if (numTries.textContent <= 0) {
  //      console.log(loser);
  //    }
  //  }





  // };
  //function loseGame() {
  //  if ( numTries.textContent <= 0 ) {
  //  alert("You Lost! Try again!")
  //  }
  //}

  startGame();
  //loseGame();
  form.addEventListener('submit', function(event) {
    event.preventDefault();
const guess = form.guess.value;


//if (guess === includes(/[abcdefghijklmnopqrstuvwxyz]/ig) ) {
//console.log(guess);
//var state = teamNames[random].name.split("").fill("_");
//var random = Math.floor(Math.random() * (31 - 0) + 0);

        for (let i = 0; i < state.length; i++) {

    //let guess = ""

          console.log(random);
          let letter = answer[i];
          if (letter === guess) {
            state[i] = guess;
            letters.textContent = state.join(" ");
            console.log(state);
            console.log(answer);
        }
          form.guess.value = '';
          tries.textContent === triesCounter--;
        }
checkWin();
        })
function checkWin() {
      if (state.includes("_") === false ) {
        document.getElementById("result-box").classList.remove("hidden");
        document.getElementById("restart").classList.remove("hidden");
      };
    }

  replay.addEventListener('click', restartGame);
  //a.addEventListener('click', () => takeGuess("a"));
  //b.addEventListener('click', () => takeGuess("b"));
  //c.addEventListener('click', () => takeGuess("c"));
  //d.addEventListener('click', () => takeGuess("d"));
  //e.addEventListener('click', () => takeGuess("e"));
  //f.addEventListener('click', () => takeGuess("f"));
  //g.addEventListener('click', () => takeGuess("g"));
  //h.addEventListener('click', () => takeGuess("h"));
  //i.addEventListener('click', () => takeGuess("i"));
  //j.addEventListener('click', () => takeGuess("j"));
  //k.addEventListener('click', () => takeGuess("k"));
  //l.addEventListener('click', () => takeGuess("l"));
  //m.addEventListener('click', () => takeGuess("m"));
  //n.addEventListener('click', () => takeGuess("n"));
  //o.addEventListener('click', () => takeGuess("o"));
  //p.addEventListener('click', () => takeGuess("p"));
  //q.addEventListener('click', () => takeGuess("q"));
  //r.addEventListener('click', () => takeGuess("r"));
  //s.addEventListener('click', () => takeGuess("s"));
  //t.addEventListener('click', () => takeGuess("t"));
  //u.addEventListener('click', () => takeGuess("u"));
  //v.addEventListener('click', () => takeGuess("v"));
  //w.addEventListener('click', () => takeGuess("w"));
  //x.addEventListener('click', () => takeGuess("x"));
  //y.addEventListener('click', () => takeGuess("y"));
  //z.addEventListener('click', () => takeGuess("z"));
  hint.addEventListener('click', giveHint);
