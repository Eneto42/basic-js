const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let dns = {};
  for (let i of domains) {
    let domain = ''
    let pieces = i.split('.').reverse();
    for (let piece of pieces) {
      domain += `.${piece}`
      if (dns.hasOwnProperty(domain)) dns[domain]++
      else dns[domain] = 1
    }
  }
return dns;
}

module.exports = {
  getDNSStats
};
