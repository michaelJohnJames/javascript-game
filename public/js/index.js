
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
  //var replayLose = document.getElementById('restart-lose')
  var letters = document.getElementById('letters');
  const guess = form.guess.value;
  var hintbox = document.getElementById('hint-box');
  var numTries = document.getElementById('tries');
//let answer, random, state;
  //var random = Math.floor(Math.random() * (31 - 0) + 0);
  //console.log(random);
  var random = Math.floor(Math.random() * (31 - 0) + 0);
  var answer = teamNames[random].name;
  var state = answer.split("").fill("_");
      var triesCounter = numTries.textContent;


      letters.textContent = state.join(" ");
      hintbox.textContent = "";
      numTries.textContent = 0;
//var random, state, answer;
  var hintbox = document.getElementById('hint-box');
  var numTries = document.getElementById('tries');
  //const random = Math.floor(Math.random() * (31 - 0) + 0);
//console.log(random);

  var answer = teamNames[random].name;
  var triesCounter = numTries.textContent;
  //const random = Math.floor(Math.random() * (31 - 0) + 0);
  //console.log(random);
  //console.log(random);
//let random, state, answer, teanNames;

function getRandomNumber() {
var random =  Math.floor(Math.random() * (31 - 0) + 0);
return random;
};

//getRandomNumber();



  //word.replace(/[abcdefghijklmnopqrstuvwxyz]/ig, "_");


  function restartGame() {
    //const random = Math.floor(Math.random() * (31 - 0) + 0);
    //var random = Math.floor(Math.random() * (31 - 0) + 0);
//getRandomNumber();
var random = null;
    console.log(random);
//var hintBox= "";
//hintBox.textContent = null;
hint.removeEventListener('click', giveHint);
form.removeEventListener('submit', guess);


    var state = "";
    var answer = "";
    //var guess = null;

    startGame();

};

//START FUNCTION

  function startGame() {
  //random = "";
   //getRandomNumber();
    var random = (Math.floor(Math.random() * (31 - 0) + 0));
    console.log(random);

    var state = teamNames[random].name.split("").fill('_');
    console.log(random);

    var answer = teamNames[random].name;
    console.log(random);
    var replay = document.getElementsByClassName('restart');

    var triesCounter = numTries.textContent;


    letters.textContent = state.join(" ");
    hintbox.textContent = "";
    numTries.textContent = 0;
    document.getElementById("result-box").classList.add("hidden");
    document.getElementById("lose-box").classList.add("hidden");
    hint.addEventListener('click', giveHint);

    //function giveHint() {
    //var random = Math.floor(Math.random() * (31 - 0) + 0);

    //  var hintbox = document.getElementById('hint-box');
  //    hintbox.textContent = teamNames[random].hintOne;
  //  console.log(random);
    }






//  };



//  function giveHint() {
//    var random = Math.floor(Math.random() * (31 - 0) + 0);
//    var hintbox = document.getElementById('hint-box');
//    hintbox.textContent = teamNames[random].hintOne;
//    console.log(random);
//  }


function giveHint() {
//var random = Math.floor(Math.random() * (31 - 0) + 0);

  var hintbox = document.getElementById('hint-box');
  hintbox.textContent = teamNames[random].hintOne;
console.log(random);
}



//window.addEventListener("onload", startGame());
  //loseGame();
  form.addEventListener('submit', function guess(event) {
    event.preventDefault();
const guess = form.guess.value;




//if (guess === includes(/[abcdefghijklmnopqrstuvwxyz]/ig) ) {
//console.log(guess);
//const random = Math.floor(Math.random() * (31 - 0) + 0);
//var state = teamNames[random].name.split("").fill('_');
//var answer = teamNames[random].name;

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
          ;
        }
numTries.textContent++;
checkWin();
//checkLoss();
        })

hint.addEventListener('click', giveHint);

function checkWin() {
      if (state.includes("_") === false ) {
        document.getElementById("result-box").classList.remove("hidden");
       document.getElementById("restart").classList.remove("hidden");
      };
    }

    function checkLoss() {
      if ( numTries.textContent === 0 ) {
        document.getElementById("lose-box").classList.remove("hidden");
       document.getElementById("restart-lose").classList.remove("hidden");
      }
    }

//    function restart() {
//      var random =""
//      var state=""
//v
//      var random = Math.floor(Math.random() * (31 - 0) + 0);
//
//      var hintbox = document.getElementById('hint-box');
//      var numTries = document.getElementById('tries');
//      var state = teamNames[random].name.split("").fill('_');
//      var answer = teamNames[random].name;
//      var triesCounter = numTries.textContent;

//      var answer = teamNames[random].name;
//      document.getElementById("result-box").classList.add("hidden");
//      document.getElementById("lose-box").classList.add("hidden");
//     letters.textContent = state.join(" ");
//     hintbox.textContent = "";
//     numTries.textContent = 0;

//     function giveHint() {
//    random = "";
//    var random = Math.floor(Math.random() * (31 - 0) + 0);
//
//       var hintbox = document.getElementById('hint-box');
//       hintbox.textContent = teamNames[random].hintOne;
//     console.log(random);

//     form.addEventListener('submit', function(event) {
//       event.preventDefault();
//     const guess = form.guess.value;

//var random =""


     //if (guess === includes(/[abcdefghijklmnopqrstuvwxyz]/ig) ) {
     //console.log(guess);
     //const random = Math.floor(Math.random() * (31 - 0) + 0);
     //var state = teamNames[random].name.split("").fill('_');
     //var answer = teamNames[random].name;

  //         for (let i = 0; i < state.length; i++) {

       //let guess = ""
//
  //           console.log(random);
  //           let letter = answer[i];
  //           if (letter === guess) {
  //             state[i] = guess;
  //             letters.textContent = state.join(" ");
  //             console.log(state);
  //             console.log(answer);
  //         }
  //           form.guess.value = '';
  //           ;
  //         }
  //   numTries.textContent++;
  //   checkWin();
     //checkLoss();
    //       })

  //   hint.addEventListener('click', giveHint);

  //   function checkWin() {
  //       if (state.includes("_") === false ) {
  //         document.getElementById("result-box").classList.remove("hidden");
  //        document.getElementById("restart").classList.remove("hidden");
  //       };
  //     }

  //     function checkLoss() {
  //       if ( numTries.textContent === 0 ) {
  //         document.getElementById("lose-box").classList.remove("hidden");
  //        document.getElementById("restart-lose").classList.remove("hidden");
  //       }
  //  }
  //   }

  //  }


  replay.addEventListener('click', restartGame);
  //replayLose.addEventListener('click', restartGame);
