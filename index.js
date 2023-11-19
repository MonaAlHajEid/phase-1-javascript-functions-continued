
// Define a Function Using Function Declaration
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
  }
  
  // Define Function Expression
  const mondayWork = function (activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
  };
  
  // Define Function Returning Function
  const wrapAdjective = function (flair = '*') {
    return function (adjective = 'special') {
      return `You are ${flair}${adjective}${flair}!`;
    };
  };
  
  // Export functions for testing
  module.exports = {
    saturdayFun,
    mondayWork,
    wrapAdjective,
  };
  