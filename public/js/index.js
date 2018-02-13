//(function game() {

  var teamNames = [{
      name: "Eagles",
      hintOne: "NFC East"
    },
    {
      name: "Cowboys",
      hintOne: "NFC East"
    },
    {
      name: "Redskins",
      hintOne: "NFC East"
    },
    {
      name: "Giants",
      hintOne: "NFC East"
    },
    {
      name: "Buccaneers",
      hintOne: "NFC South"
    },
    {
      name: "Falcons",
      hintOne: "NFC South"
    },
    {
      name: "Panthers",
      hintOne: "NFC South"
    },
    {
      name: "Saints",
      hintOne: "NFC South"
    },
    {
      name: "Seahawks",
      hintOne: "NFC West"
    },
    {
      name: "FortyNiners",
      hintOne: "NFC West"
    },
    {
      name: "Rams",
      hintOne: "NFC West"
    },
    {
      name: "Cardinals",
      hintOne: "NFC West"
    },
    {
      name: "Vikings",
      hintOne: "NFC North"
    },
    {
      name: "Packers",
      hintOne: "NFC North"
    },
    {
      name: "Bears",
      hintOne: "NFC North"
    },
    {
      name: "Lions",
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
  var playAgain = document.getElementById('restart-lose')
  var letters = document.getElementById('letters');
  var random = Math.floor(Math.random() * (31 - 0) + 0);
  var answer = teamNames[random].name;
  console.log(answer);
  var state = answer.split("").fill("_");
  letters.textContent = state.join(" ");
  var hintbox = document.getElementById('hint-box');
  var numTries = document.getElementById('tries');
  var triesCounter = numTries.textContent;
  var lose = document.getElementById('lose-box');
  numTries.textContent = 10;


//FOR RESTART
  function getRandomNumber() {
    var random = Math.floor(Math.random() * (32 - 0) + 0);
    startGame(random);
  };

  //START FUNCTION FOR REPLAY OF GAME

  function startGame(random) {
    state = teamNames[random].name.split("").fill('_');
    answer = teamNames[random].name.toLowerCase();
    replay = document.getElementsByClassName('restart');
    triesCounter = numTries.textContent;

    letters.textContent = state.join(" ");
    hintbox.textContent = "";
    numTries.textContent = 10;
    document.getElementById("result-box").classList.add("hidden");
    document.getElementById("lose-box").classList.add("hidden");

    function newHint() {
      var hintbox = document.getElementById('hint-box');
      hintbox.textContent = teamNames[random].hintOne;
    };
    hint.addEventListener('click', newHint);


    form.addEventListener('submit', function guess(event) {
      event.preventDefault();
      //let newState = teamNames[random].name.split("").fill('_');
      //const guess = "";
      var guess = form.guess.value;
      for (let i = 0; i < state.length; i++) {
        let letter = answer[i];
        if (letter === guess) {
          state[i] = guess;
          letters.textContent = state.join(" ");
      }
        form.guess.value = '';;
      }
      numTries.textContent - 1;
      checkWin();
    })


    function checkWin() {
      //let state = teamNames[random].name.split("").fill('_');
      if (state.includes("_") === true) {
        document.getElementById("ball10r").classList.remove("hidden")
      }


      if (state.includes("_") === false) {
        document.getElementById("result-box").classList.remove("hidden");
        document.getElementById("restart").classList.remove("hidden");
        guess = "";
        answer = "";
        numTries.textContent = 10;
        };
    }
  }

  //GET HINT

  function giveHint() {
    //let random = Math.floor(Math.random() * (31 - 0) + 0);
    var hintbox = document.getElementById('hint-box');
    hintbox.textContent = teamNames[random].hintOne;
  }

// SUBMIT LETTER
  form.addEventListener('submit', function guess(event) {
    event.preventDefault();
    var guess = form.guess.value;

    for (let i = 0; i < state.length; i++) {
      let letter = answer[i].toLowerCase();
      console.log(letter)
      if (letter === guess) {
        state[i] = guess.toUpperCase();
        letters.textContent = state.join(" ");
      }
      form.guess.value = '';
    }
    numTries.textContent--;
    if (state.includes("_") === false) {

      form.guess.value = "";
      random = "";
      guess = "";
      answer = "";
      state = "";
      document.getElementById("result-box").classList.remove("hidden");
      document.getElementById("restart").classList.remove("hidden");
    }
    checkWin();
  });

  hint.addEventListener('click', giveHint);

  function checkWin() {
    if (state.includes("_") === false) {
      let guess = "";
      answer = "";
      random = null;
      let state = "";
      document.getElementById("result-box").classList.remove("hidden");
      document.getElementById("restart").classList.remove("hidden");
      numTries.textContent = "";
    } else if (numTries.textContent === '0') {
      let guess = "";
      answer = "";
      random = null;
      let state = "";
        document.getElementById('lose-box').classList.remove('hidden');
        document.getElementById('restart-lose').classList.remove('hidden');
      };
  }

  console.log(state);
  console.log(answer);


  replay.addEventListener('click', getRandomNumber);
  playAgain.addEventListener('click', getRandomNumber);

//})()
