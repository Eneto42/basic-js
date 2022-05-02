const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(team) {
  if (!Array.isArray(team)) return false
  else {
  let teamName = team.map(e => {
    if (typeof(e) == 'string')
    return e.trim()[0].toUpperCase()
  }).sort().join('');
  if (teamName) return teamName
  else return false
  }
}

module.exports = {
  createDreamTeam
};
