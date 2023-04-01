// Import the data from the JSON files using the require() function
const sportsData = require('./sport.json');
const actionsData = require('./actions.json');
const adjectivesData = require('./adjectives.json');

// Define the generateMessage function using arrow notation
const generateMessage = () => {
    // Prompt the user for their name using the prompt() function
    const name = prompt("What is your name?");
    // Choose a random sport, action, and adjective from the imported data using Math.random() and Math.floor()
    const sport = sportsData.sports[Math.floor(Math.random() * sportsData.sports.length)];
    const action = actionsData.actions[Math.floor(Math.random() * actionsData.actions.length)];
    const adjective = adjectivesData.adjectives[Math.floor(Math.random() * adjectivesData.adjectives.length)];
    // Return a string that combines the chosen sport, action, and adjective into a motivational message
    return `${name}, you are ${adjective} at ${sport}, ${action}!`
};

// Call the generateMessage function and output the result to the console
console.log(generateMessage());
