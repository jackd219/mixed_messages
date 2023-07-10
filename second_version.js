const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const ageRangeStarterMessage = ["Nice try, that's not a real age, start again please!",
  "You shouldn't be working, so let's instead predict what you WILL be doing. I see your future in...",
  "I see you're a spring chicken clearly, so I can see you being involved in...",
  "Age not on your side now I see, but your career is still in...",
  "Creeping up to retirement age I see. I predict that your career is still in...",
  "Why are you still working?! Anyway, I think that it's a certainty that you are still in...",
  "Twilight years I see. Let's guess what you were doing...ah of course, it was in..."
];

const careerRange = ['Sports', 'Politics', 'Film', 'TV', 'Politics', 'Music', 'Art', 'Literature', 'Theatre'];

const hairRange = ['You have hair on the darker side, so I am predicting that you are mysterious and a hidden person in that career',
  'Pretty standard hair I would say, you stick to the rules I bet!',
  'Wow, very bright-colored hair, you must be the loudest and most flamboyant of them all!'
];

const foodRange = ['Very smelly food, not sure your colleagues will be a fan of that',
  'Nice choice, Gordon Ramsey would be proud!',
  'Hmm, I think you can do better than that for food!',
  'OK, I guess for a food choice, maybe put something else and I would give you a different answer'
];

function ageRange(age) {
  const arr = ageRangeStarterMessage;
  
  if (isNaN(age) || age <= 0) {
    console.log(arr[0]);
  } else if (age <= 17) {
    console.log(arr[1]);
  } else if (age <= 39) {
    console.log(arr[2]);
  } else if (age <= 59) {
    console.log(arr[3]);
  } else if (age <= 64) {
    console.log(arr[4]);
  } else if (age <= 79) {
    console.log(arr[5]);
  } else if (age >= 80) {
    console.log(arr[6]);
  } else {
    console.log("Invalid age input");
  }
}

function randomiseCareer() {
  const arr = careerRange;
  console.log(`Career: ${arr[Math.floor(Math.random() * arr.length)]}`);
}

function hairMessage(hairType) {
  const arr = hairRange;
  
  switch (hairType) {
    case 'Dark':
      console.log(arr[0]);
      break;
    case 'Normal':
      console.log(arr[1]);
      break;
    case 'Bright':
      console.log(arr[2]);
      break;
    default:
      console.log("Invalid hair type");
  }
}

function foodMessage(foodType) {
  const arr = foodRange;
  console.log(`Food: ${arr[Math.floor(Math.random() * arr.length)]}`);
}

function runFunctions() {
  rl.question('What is your age? Please enter a number greater than 0: ', (agePrompt) => {
    rl.question('Is your hair Dark/Normal/Bright? Please specify your type: ', (hairType) => {
        rl.question('Name your favourite type of food: ', (foodType) => {
      ageRange(agePrompt);
      randomiseCareer();
      hairMessage(hairType);
      foodMessage(foodType);
      rl.close();
    });
  });
})
};

runFunctions();

