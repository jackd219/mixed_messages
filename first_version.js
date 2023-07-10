// Declaring arrays for the message structure

const ageRangeStarterMessage = ["Nice try, that's not a real age, start again please!",
"You shouldn't be working, so let's instead predict what you WILL be doing. I see your future in...", 
"I see you're a spring chicken clearly, so I can see you being involved in...", 
"Age not on your side now I see, but your career is still in...", 
"Creeping up to retirement age I see. I predict that you're career is still in...", 
"Why are you still working?! Anyway, I think that it's a certainty that you are still in...",
 "Twilight years I see. Let's guess what you were doing...ah of course, it was in..."]

 const careerRange = ['Sports',
'Politics',
'Film',
'TV',
'Politics',
'Music',
'Art',
'Literature',
'Theatre']

const hairRange = ['You have hair on the darker side, so I am predicting that you are mysterious and a hidden person in that career',
'Pretty standard hair I would say, you stick to the rules I bet!',
'Wow, very bright-coloured hair, you must be the loudest and most flamboyant of them all!']

const foodRange = ['Very smelly food, not sure your colleagues will be a fan of that',
'Nice choice, Gordon Ramsey would be proud!',
'Hmm I think you can do better than that for food!',
' OK I guess for a food choice, maybe put something else and I would give you a different answer']

//Setting function to return starter message based on age

function ageRange(age) {
    let arr = ageRangeStarterMessage; // Assuming ageRangeStarterMessage is defined
  
    if (age < 1) {
      console.log(arr[0]);
    } else if (age >= 1 && age <= 17) {
      console.log(arr[1]);
    } else if (age >= 18 && age <= 39) {
      console.log(arr[2]);
    } else if (age >= 40 && age <= 59) {
      console.log(arr[3]);
    } else if (age >= 60 && age <= 64) {
      console.log(arr[4]);
    } else if (age >= 65 && age <= 79) {
      console.log(arr[5]);
    } else if (age >= 80) {
      console.log(arr[6]);
    } else {
      console.log("Something went wrong");
    }
  }
   //Function to choose random career


function randomiseCareer () {
    let arr = careerRange
console.log(arr[(Math.floor(Math.random() * arr.length))]);
}

// function to return message based on hair

function hairMessage(string) {
    let arr = hairRange; 
  
    if (string === 'Dark') {
      console.log(arr[0]);
    } else if (string === 'Normal') {
      console.log(arr[1]);
    } else if (string === 'Bright') {
      console.log(arr[2]);
    } else {
      console.log("Something went wrong");
    }
  }


  // function for random food message

  function foodMessage () {
    let arr = foodRange
console.log(arr[(Math.floor(Math.random() * arr.length))]);
  }

  // Main function to call the three functions

function runFunctions() {

// Prompt the user for input
const agePrompt = prompt('What is your age? Please enter a number greater than 0: ');
const hairType = prompt('Is your hair Dark/Normal/Bright? Please specify your type:');


// Call the three functions with user-provided parameters
ageRange(agePrompt);
randomiseCareer();
hairMessage(hairType);
foodMessage();
}

// Call the main function to start the execution
runFunctions();