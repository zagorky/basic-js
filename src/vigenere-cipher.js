const { NotImplementedError } = require("../extensions/index.js");

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
  constructor(direct = true) {
    this.direct = direct;
    this.latinAlphabetLength = 26;
    this.asciiOfset = 65;
  }

  encrypt(message, key) {
    let keyIndex = 0;
    let encryptedMessage = "";
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }

    const preparedMessage = message.toUpperCase();
    const preparedKey = this.repeatKey(preparedMessage, key).toUpperCase();

    for (let i = 0; i < preparedMessage.length; i += 1) {
      if (preparedMessage[i] >= "A" && preparedMessage[i] <= "Z") {
        const charCode = preparedMessage[i].charCodeAt(0) - this.asciiOfset;
        const keyCode =
          preparedKey[keyIndex % key.length].charCodeAt(0) - this.asciiOfset;
        const encryptedCharCode =
          (charCode + keyCode) % this.latinAlphabetLength;
        encryptedMessage += String.fromCharCode(
          encryptedCharCode + this.asciiOfset
        );
        keyIndex += 1;
      } else {
        encryptedMessage += preparedMessage[i];
      }
    }

    return this.direct
      ? encryptedMessage
      : encryptedMessage.split("").reverse().join("");
  }

  decrypt(encriyptedMessage, key) {
    let keyIndex = 0;
    let decryptedMessage = "";
    if (!encriyptedMessage || !key) {
      throw new Error("Incorrect arguments!");
    }

    const preparedMessage = encriyptedMessage.toUpperCase();
    const preparedKey = this.repeatKey(preparedMessage, key).toUpperCase();

    for (let i = 0; i < preparedMessage.length; i += 1) {
      if (preparedMessage[i] >= "A" && preparedMessage[i] <= "Z") {
        const charCode = preparedMessage[i].charCodeAt(0) - this.asciiOfset;
        const keyCode =
          preparedKey[keyIndex % key.length].charCodeAt(0) - this.asciiOfset;
        const decryptedCharCode =
          (charCode - keyCode + this.latinAlphabetLength) %
          this.latinAlphabetLength;
        decryptedMessage += String.fromCharCode(
          decryptedCharCode + this.asciiOfset
        );
        keyIndex += 1;
      } else {
        decryptedMessage += preparedMessage[i];
      }
    }

    return this.direct
      ? decryptedMessage
      : decryptedMessage.split("").reverse().join("");
  }

  repeatKey(message, key) {
    const messageLegth = message.length;
    const keyLength = key.length;
    const index = messageLegth % keyLength;
    const times = Math.floor(messageLegth / keyLength);
    return `${key.repeat(times)}${key.slice(0, index)}`;
  }
}

// const reverseMachine = new VigenereCipheringMachine(false);
// const directMachine = new VigenereCipheringMachine();
// console.log(directMachine.encrypt("attack at dawn!", "alphonse")); // 'AEIHQX SX DLLU!'
// console.log(reverseMachine.encrypt("attack at dawn!", "alphonse")); // '!ULLD XS XQHIEA'
// console.log(reverseMachine.decrypt("AEIHQX SX DLLU!", "alphonse")); // '!NWAD TA KCATTA'
// console.log(directMachine.decrypt("AEIHQX SX DLLU!", "alphonse")); // 'ATTACK AT DAWN!
module.exports = {
  VigenereCipheringMachine,
};
