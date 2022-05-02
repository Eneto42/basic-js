const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.type = isDirect;
  }
  isLetter (str) {
    return str.length === 1 && str.match(/[a-zA-Z]/i);
  }
  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');

    let result = '';
    message = message.toUpperCase();
    key = key.toUpperCase();
      for (let i = 0, j = 0; i < message.length; i++) {
        const c = message.charAt(i);
        if (this.isLetter(c)) {
            result += String.fromCharCode((c.charCodeAt(0) + key.charCodeAt(j) - 2 * 65) % 26 + 65);
            j = ++j % key.length;
          } 
        else {
          result += c;
        }
      }
      return this.type ? result : result.split('').reverse().join('');
  }
  decrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');
    let result = '';
    message = message.toUpperCase();
    key = key.toUpperCase();
    for (let i = 0, j = 0; i < message.length; i++) {
      const c = message.charAt(i);
      if (this.isLetter(c)) {
          result += String.fromCharCode(90 - (25 - (c.charCodeAt(0) - key.charCodeAt(j))) % 26);
          j = ++j % key.length;
      } else {
        result += c;
      }
    }
    return this.type ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
