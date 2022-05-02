const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(dt) {
  if (!dt) return 'Unable to determine the time of year!'
  if (!(dt instanceof Date) || dt.hasOwnProperty('toString')) throw new Error('Invalid date!')
  let dtMonth = dt.getMonth()
  if (dtMonth >= 2 && dtMonth <= 4) return 'spring'
  if (dtMonth >= 5 && dtMonth <= 7) return 'summer'
  if (dtMonth >= 8 && dtMonth <= 10) return 'autumn'
  if (dtMonth <= 1 || dtMonth == 11) return 'winter'
}

module.exports = {
  getSeason
};
