class VigenereCipheringMachine {
  constructor(isReverse) {
    this.isReverse = isReverse;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  encrypt(message, key) {
    var result = '';
    var processIndex = 0;

    var messageElements = message.toUpperCase();
    for (var index = 0; index < messageElements.length; index++) {
      const element = messageElements[index];
      if (this.alphabet.indexOf(element) == -1) {
        result += element;
      }
      else {
        var resultIndex = (this.alphabet.indexOf(element)
          + this.alphabet.indexOf(key.toUpperCase()[processIndex]))
          % this.alphabet.length;
        processIndex++;

        if (processIndex == key.length)
          processIndex = 0;

        result += this.alphabet[resultIndex];
      }
    }

    if (this.isReverse == false)
      return result.split('').reverse().join('');
    return result;
  }

  decrypt(message, key) {
    var result = '';
    var processIndex = 0;

    var messageElements = message.toUpperCase();
    for (var index = 0; index < messageElements.length; index++) {
      const element = messageElements[index];
      if (this.alphabet.indexOf(element) == -1) {
        result += element;
      }
      else {
        var resultIndex = (this.alphabet.indexOf(element)
          + this.alphabet.length
          - this.alphabet.indexOf(key.toUpperCase()[processIndex]))
          % this.alphabet.length;
        processIndex++;

        if (processIndex == key.length)
          processIndex = 0;

        result += this.alphabet[resultIndex];
      }
    }
    if (this.isReverse == false)
      return result.split('').reverse().join('');
    return result;
  }
}

module.exports = VigenereCipheringMachine;
