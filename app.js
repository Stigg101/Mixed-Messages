const sportsData = require('./sport.json');
const actionsData = require('./actions.json');
const adjectivesData = require('./adjectives.json');

const generateMessage = () => {
    const sport = sportsData.sports[Math.floor(Math.random() * sportsData.sports.length)];
    const action = actionsData.actions[Math.floor(Math.random() * actionsData.actions.length)];
    const adjective = adjectivesData.adjectives[Math.floor(Math.random() * adjectivesData.adjectives.length)];
    return `You are ${adjective} at ${sport}, ${action}!`
};

console.log(generateMessage());