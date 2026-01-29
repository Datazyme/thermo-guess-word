<script>
    import { onMount } from "svelte";
    import "../app.css";
  
    let words = [
      { word: " thermal cycler", clue: "An instrument that cycles between temeperatures", image:"/images/thermalCyclers.jpeg"},
      { word: " DNA polymerase", clue: "An enzyme that synthesizes long chains of nucleic acids from a template", image:"/images/ThermoTaqPolymerases.jpg"},
      { word: " EGel Power Snap Electrophoresis System", clue: "A benchtop system that seamlessly integrates DNA sample separation and gel imaging into one workflow", image:"/images/eGelElectrophoresis.jpg"},
      { word: " Qubit Fluorometer", clue: "An instrument that delivers fast, accurate, sensitive, and specific quantification of DNA, RNA, protein, and endotoxin detection", image:"/images/qubit.jpg"},
      { word: " real time PCR", clue: "A laboratory technique used to amplify and simultaneously quantify a targeted DNA molecule", image:"/images/RTpcrMachine.jpg"},
      { word: " fluorophore", clue: "A compound used in immunofluorescence microscopy", image:"/images/nhsFluoresceinKit.jpg"},
      { word: " electrophoresis", clue: "A technique used to separate molecules based on their charges", image:"/images/electrophoresis.jpg"},
      { word: " SYBR Safe", clue: "A compound used to stain DNA in agarose gels to visualize it under UV or blue light", image:"/images/sybrSafe.jpg"}
    ];
    //let words = [{}]
    let secretWord = ""; //randomly selected word
    let clue = "";
    let clueImage = "";
    let guessedLetters = new Set(); //stores guessed letters
    let wrongGuesses = 0;
    let maxWrongGuesses = 3;
    let gameOver = false;
    let gameWon = false;
    let displayWord = ""; //added this show correct guesses of letters in secret word and display it in a seperate section.

    //chooses random word and resets number of guesses
    function chooseRandomWord() {
      const randomItem = words[Math.floor(Math.random() * words.length)];
      
      secretWord = randomItem.word.toUpperCase();
      clue = randomItem.clue;
      clueImage = randomItem.image;
      
      guessedLetters.clear();
      updateDisplayWord();
    }
    

  
    //takes user guessed letter, checks if letter added or not and updates display/win/lose/number of guesses accordingly
    //letter here is passed from the for/each block in the "letter buttons" <div> styled below
    /**
	 * @param {string} letter
	 */
    function guessLetter(letter) {
      if (gameOver || gameWon || guessedLetters.has(letter)) return;
  
      guessedLetters.add(letter);
  
      if (!secretWord.includes(letter)) {
        wrongGuesses++;
      }
  
      updateDisplayWord();
      checkGameStatus();
    }
  
  // Add this function to update blanks when correct letters chosen then call it in guessletter function AND in choose random word function
    function updateDisplayWord() {
      displayWord = secretWord
        .split("")
        .map(letter => {
          if (letter === " ") return "\n"; //keeps spaces visible
          return guessedLetters.has(letter) ? letter : "_";
        })
          //(letter => (guessedLetters.has(letter) ? letter : "_"))
        .join(" ");
    }
  
    //displayword used in function below to update gamestatus by checking if there are any blanks in displayword
    function checkGameStatus() {
      if (!displayWord.includes("_")) {
        gameWon = true;
      }
  
      if (wrongGuesses >= maxWrongGuesses) {
        gameOver = true;
      } 
    }
  
    function resetGame() {
      guessedLetters.clear();
      wrongGuesses = 0;
      gameOver = false;
      gameWon = false;
      chooseRandomWord();
    }
  
    onMount(() => {
      chooseRandomWord();
    });
  </script>
  
  <main class="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white pr-4 pl-4">
    <h1 class="text-3xl font-bold mb-4 text-red-500">Thermo Fisher Scientific</h1>
    <h1 class="text-3xl font-bold mb-4 text-indigo-300">Word Guessing Game</h1>
    <p class="text-lg mb-4 text-indigo-300">Guess the word letter by letter!</p>
    <p class="text-yellow-300 italic mb-6 text-2xl">Clue: {clue}</p>


    {#if gameWon}
      <div class="pyro">
        <div class="before"></div>
        <div class="after"></div>
       </div>
      <img class="h-sm w-sm border-6 border-indigo-500 border-solid border rounded-lg"
      src={clueImage}
      alt="Word hint"
      />
      
    {:else}
     <img class="h-sm w-sm border-6 border-indigo-500 border-solid border rounded-lg blur-lg"
      src={clueImage}
      alt="Word hint"
      />
    {/if}

  
    <!-- Display Word with Spaces -->
    <div class="text-3xl font-mono tracking-wide mb-6 items-center justify-center whitespace-pre">
      {displayWord}
    </div>
  
    <!-- Wrong Guess Count -->
    <p class="text-red-400 mb-4">Wrong Guesses: {wrongGuesses} / {maxWrongGuesses}</p>
  
    <!-- Game Result Messages -->
    {#if gameWon}
      <p class="text-green-400 text-xl font-bold mb-4">🎉 You Won! 🎉</p>
    {:else if gameOver}
      <p class="text-red-400 text-xl font-bold mb-4">😢 You Lost! The word was "{secretWord}"</p>
    {/if}
  
    <!-- Letter Buttons , letter is used in the guessLetter function above-->
    <div class="grid grid-cols-13 gap-2 mb-6">
      {#each "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("") as letter}
        <button
          on:click={() => guessLetter(letter)}
          disabled={guessedLetters.has(letter)}
          class="w-11 h-11 bg-indigo-500 hover:bg-blue-500 text-black font-bold rounded disabled:opacity-50"
        >
          {letter}
        </button>
      {/each}
    </div>
  
    <!-- Restart Button -->
    <button
      on:click={resetGame}
      class="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded"
    >
      Restart Game
    </button>
  </main>

