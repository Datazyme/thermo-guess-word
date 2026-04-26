<script>
    import { onMount } from "svelte";
    import "../app.css";
    import { wordGroups } from '$lib'
  
    // let words = [
    //   { word: " thermal cycler", clue: "An instrument that cycles between temeperatures", image:"/images/thermalCyclers.jpeg"},
    //   { word: " DNA polymerase", clue: "An enzyme that synthesizes long chains of nucleic acids from a template", image:"/images/ThermoTaqPolymerases.jpg"},
    //   { word: " EGel Power Snap Electrophoresis System", clue: "A benchtop system that seamlessly integrates DNA sample separation and gel imaging into one workflow", image:"/images/eGelElectrophoresis.jpg"},
    //   { word: " Qubit Fluorometer", clue: "An instrument that delivers fast, accurate, sensitive, and specific quantification of DNA, RNA, protein, and endotoxin detection", image:"/images/qubit.jpg"},
    //   { word: " real time PCR", clue: "A laboratory technique used to amplify and simultaneously quantify a targeted DNA molecule", image:"/images/RTpcrMachine.jpg"},
    //   { word: " fluorophore", clue: "A compound used in immunofluorescence microscopy", image:"/images/nhsFluoresceinKit.jpg"},
    //   { word: " electrophoresis", clue: "A technique used to separate molecules based on their charges", image:"/images/electrophoresis.jpg"},
    //   { word: " SYBR Safe", clue: "A compound used to stain DNA in agarose gels to visualize it under UV or blue light", image:"/images/sybrSafe.jpg"}
    // ];


    let selectedGroup = 'random'

    let secretWord = ""; //randomly selected word
    let clue = "";
    let clueImage = "";
    let clueLink = "";
    let guessedLetters = new Set(); //stores guessed letters
    let wrongGuesses = 0;
    let maxWrongGuesses = 3;
    let gameOver = false;
    let gameWon = false;
    let displayWord = ""; //added this show correct guesses of letters in secret word and display it in a seperate section.
    
    //chooses random word and resets number of guesses
    function chooseRandomWord() {
      const group = wordGroups[selectedGroup]
      const randomItem = group[Math.floor(Math.random() * group.length)];
      
      secretWord = randomItem.word.toUpperCase();
      clue = randomItem.clue;
      clueImage = randomItem.image;
      clueLink = randomItem.link;
      console.log(randomItem.link);
      
      guessedLetters = new Set();
      updateDisplayWord();
    }

      
    //takes user guessed letter, checks if letter added or not and updates display/win/lose/number of guesses accordingly
    //letter here is passed from the for/each block in the "letter buttons" <div> styled below

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
      guessedLetters = new Set();
      wrongGuesses = 0;
      gameOver = false;
      gameWon = false;
      chooseRandomWord();
    }
  
    onMount(() => {
      chooseRandomWord();
    });
  </script>
  
  <main class="flex flex-col flex-1 bg-gray-900 p-4 overflow-auto">
    <section id="Titles" class="flex flex-col items-center justify-center text-white pr-4 pl-4">
      <h1 class="text-3xl font-bold mb-4 text-red-500 pt-8">Thermo Fisher Scientific </h1>
      <h1 class="text-3xl font-bold mb-4 text-indigo-300">Word Guessing Game</h1>
      <p class="text-lg mb-4 text-indigo-300">Guess the word letter by letter!</p>
      <p class="text-yellow-300 italic mb-1 sm:mb-6 text-2xl">Clue: {clue}</p>
      
    </section>

    <section id="wordSelection" class="flex flex-col sm:flex-row justify-center text-yellow-300 text-sm sm:text-2xl">
      <h3 class="text-yellow-300 text-base sm:text-2xl p-4">Choose category:</h3>
      <select id="dropdown" bind:value={selectedGroup} on:change={resetGame}
        class="italic mb-6 mb-4 px-3 py-2 bg-gray-800 border border-gray-600 rounded">
          {#each Object.keys(wordGroups) as group}
        <option value={group}>
          {group}
        </option>
          {/each}
      </select>
      
    </section>

    <section id="picture" class="flex flex-col xl:flex-row items-center justify-center pt-6 pr-6 m-2" >
      {#if gameWon}
      <div class="pyro">
        <div class="before"></div>
        <div class="after"></div>
      </div>
       <a href={clueLink} target="_blank">
      <img class="h-40 w-40 sm:h-70 sm:w-70 border-6 border-indigo-500 border-solid border rounded-lg"
      src={clueImage}
      alt="Word hint"
      />
      </a>
      
      {:else}

      <a href={clueLink} target="_blank">
        <img class="h-40 w-40 sm:h-70 sm:w-70 border-6 border-indigo-500 border-solid border rounded-lg blur-lg"
        src={clueImage}
        alt="Word hint"
        />
      </a>

  
      {/if}
          <!-- Display Word with Spaces -->
      <div class="text-sm sm:text-xl xl:text-3xl text-white mt-4 pl-6 font-mono tracking-wide items-center justify-center whitespace-pre">
        {displayWord}
      </div>
      
    </section>

    <section id="letterkeys" class="flex flex-col justify-center items-center">
      <!-- Wrong Guess Count -->
    <p class="text-red-400 m-4 text-xl">Wrong Guesses: {wrongGuesses} / {maxWrongGuesses}</p>
  
    <!-- Game Result Messages -->
    {#if gameWon}
      <p class="text-green-400 text-xl font-bold mb-4">🎉 You Won! 🎉</p>
    {:else if gameOver}
      <p class="text-red-400 text-xl font-bold mb-4">😢 You Lost! The word was "{secretWord}"</p>
    {/if}
  
    <!-- Letter Buttons , letter is used in the guessLetter function above-->
    <div class="grid grid-cols-9 xl:grid-cols-13 gap-2">
      {#each "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("") as letter}
        <button
          on:click={() => guessLetter(letter)}
          disabled={guessedLetters.has(letter)}
          class="w-6 h-6 xl:w-11 xl:h-11 bg-indigo-500 hover:bg-blue-500 text-black font-bold rounded disabled:opacity-50"
        >
          {letter}
        </button>
      {/each}
    </div>
    </section>

    <section id="reset" class="py-2.5 flex justify-center items-center">
      <!-- Restart Button -->
      <button
        on:click={resetGame}
        class="px-4 mt-2 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded"
      >
      Restart Game
      </button>
    </section>
  </main>

