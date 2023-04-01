// Description: This is the main file for the random message generator
const readline = require('readline');
// Import the sports, actions, and adjectives data
const sportsData = require('./sport.json');
const actionsData = require('./actions.json');
const adjectivesData = require('./adjectives.json');

// Create the readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to generate the message
const generateMessage = () => {
    // Ask the user for their name
  rl.question('What is your name? ', (name) => {
    // Generate a random sport, action, and adjective
    const sport = sportsData.sports[Math.floor(Math.random() * sportsData.sports.length)];
    const action = actionsData.actions[Math.floor(Math.random() * actionsData.actions.length)];
    const adjective = adjectivesData.adjectives[Math.floor(Math.random() * adjectivesData.adjectives.length)];

    // Print the message
    const message = `${name}, you are ${adjective} at ${sport}, ${action}!`;
    console.log(message);

    rl.close();
  });
};

// Call the function to generate the message
generateMessage();
