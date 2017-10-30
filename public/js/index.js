(function game() {

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

//GLOBAL VARIABLES
var form = document.forms[0];
var guess = form.guess.value;
var replay = document.getElementById('restart');
//var replayLose = document.getElementById('restart-lose')
var letters = document.getElementById('letters');
var random = Math.floor(Math.random() * (31 - 0) + 0);
var answer = teamNames[random].name;
var state = answer.split("").fill("_");


letters.textContent = state.join(" ");
//  hintbox.textContent = "";
//var random, state, answer;
var hintbox = document.getElementById('hint-box');
var numTries = document.getElementById('tries');
var triesCounter = numTries.textContent;
numTries.textContent = 0;






function getRandomNumber() {
  var random = Math.floor(Math.random() * (31 - 0) + 0);
  startGame(random);
};




function restartGame() {
  //const random = Math.floor(Math.random() * (31 - 0) + 0);
  //var random = Math.floor(Math.random() * (31 - 0) + 0);
  //getRandomNumber();
  var random = null;
  //var hintBox= "";
  //var hintbox = document.getElementById('hint-box');
  //var hint = document.getElementById('hint');
  hintbox.textContent = "";
  //var form = document.forms[0];
  var guess = "";
  //document.getElementById('guess').reset();
  //hint.removeEventListener('click', giveHint);

  //form.removeEventListener('submit', guess);


  var state = "";
  var answer = "";
  //var guess = null;

  startGame();

};

//START FUNCTION

function startGame(random) {
  //answer = "";
  //getRandomNumber();
  //  var random = (Math.floor(Math.random() * (31 - 0) + 0));
  //  console.log(random);

  var state = teamNames[random].name.split("").fill('_');
  console.log(state);

  var answer = teamNames[random].name;
  var replay = document.getElementsByClassName('restart');

  var triesCounter = numTries.textContent;


  letters.textContent = state.join(" ");
  hintbox.textContent = "";
  numTries.textContent = 0;
  document.getElementById("result-box").classList.add("hidden");
  document.getElementById("lose-box").classList.add("hidden");
  //hint.addEventListener('click', giveHint);

  //var random = Math.floor(Math.random() * (31 - 0) + 0);

  function giveHint() {
    var hintbox = document.getElementById('hint-box');
    hintbox.textContent = teamNames[random].hintOne;
  };

    form.addEventListener('submit', function guess(event) {
      event.preventDefault();
      //let newState = teamNames[random].name.split("").fill('_');
      //const guess = "";
      var guess = form.guess.value;
      for (let i = 0; i < state.length; i++) {
        let letter = answer[i];
        if (letter === guess) {
          currentState[i] = guess;
          letters.textContent = newState.join(" ");
          console.log(state);
          console.log(state);
          console.log(answer);
        }
        form.guess.value = '';;
      }
      numTries.textContent++;
      checkWin();
    })

    function checkWin(state) {
     //let state = teamNames[random].name.split("").fill('_');
console.log(state);
      if (state.includes("_") === false ) {
        document.getElementById("result-box").classList.remove("hidden");
        document.getElementById("restart").classList.remove("hidden");
        guess = "";
        answer = "";
        random = "";
        state = "";

      };
    }






//SUBMIT LETTER

//  form.addEventListener('submit', function guess(event, random) {
//    event.preventDefault();
//    //const guess = "";
//    var guess = form.guess.value;
//    for (let i = 0; i < state.length; i++) {
//      let letter = answer[i];
//      if (letter === guess) {
//        state[i] = guess;
//        letters.textContent = state.join(" ");
//        console.log(state);
//        console.log(answer);
//      }
//      form.guess.value = '';;
//    }
//    numTries.textContent++;
        //checkWin();
//  })

//  hint.addEventListener('click', giveHint);
}

//GET HINT

function giveHint() {
  //var random = Math.floor(Math.random() * (31 - 0) + 0);
  var hintbox = document.getElementById('hint-box');
  hintbox.textContent = teamNames[random].hintOne;
  console.log(random);
}

form.addEventListener('submit', function guess(event) {
  event.preventDefault();
  var guess = form.guess.value;

  for (let i = 0; i < state.length; i++) {
    console.log(random);
    let letter = answer[i];
    if (letter === guess) {
      state[i] = guess;
      letters.textContent = state.join(" ");
      console.log(state);
      console.log(answer);
    }
    form.guess.value = '';;
  }
  numTries.textContent++;
if (state.includes("_") === false ) {

    form.guess.value = "";
console.log(state);
  random = "";
  guess = "";
  answer = "";
  //state = "";
  console.log(state);
  document.getElementById("result-box").classList.remove("hidden");
  document.getElementById("restart").classList.remove("hidden");
}
  checkWin();

  checkLoss();
});

hint.addEventListener('click', giveHint);

function checkWin() {
console.log(state);
  if (state.includes("_") === false ) {
    document.getElementById("result-box").classList.remove("hidden");
    document.getElementById("restart").classList.remove("hidden");
    let guess = "";
    answer = "";
    random = null;
    let state = "";

  };
}

function checkLoss() {
  if (numTries.textContent === 0) {
    document.getElementById("lose-box").classList.remove("hidden");
    document.getElementById("restart-lose").classList.remove("hidden");
  }
}




replay.addEventListener('click', getRandomNumber);
//replayLose.addEventListener('click', restartGame);
}) ()
