/** A shift cipher takes a plain text message and shifts each letter forward in the alphabet by a given number. For example, a shift cipher with a shift of 1 would turn the string 'hello' to 'ifmmp'.

Create a class ShiftCipher that takes the numerical value of the shift as a constructor parameter. The class should have two methods:

encrypt: takes a plain text string and returns a capitalized string with each letter shifted forward in the alphabet based on the set shift value.
decrypt: takes an encrypted message and returns a lower case string with each letter shifted back in the alphabet based on the set shift value.
In both methods, any character outside the alphabet should remain the same.
But if a character is shifted outside the alphabet in either direction it should be wrapped around to the other side. For example, encrypting a y with a shift of 4 results in C and decrypting an A with a shift of 1 result in z.
Example:


Notes:

only consider alphabet letters!
unicodes between 65 - 90 (uppercase)
unicodes between 97 - 122 (lowercase)

toUpperCase(), toLowerCase(), charCodeAt() and fromCharCode()
*/

class ShiftCipher {
    constructor(shiftValue) {
        this.shiftValue = shiftValue;
    }
    unicodeAlphabetCapLettersStart = 65;
    unicodeAlphabetCapLettersEnd = 90;

    /** takes a UTF-16 code unit and determines if it is a upper case letter (A-Z) */
    isCharUpperCaseLetter(UTFcodeUnit) {
        return UTFcodeUnit >= this.unicodeAlphabetCapLettersStart && UTFcodeUnit <= this.unicodeAlphabetCapLettersEnd;
    }

    /** takes a plain text string and returns a capitalized string with each letter shifted forward in the alphabet based on the set shift value. */
    encrypt(messageText) {
        const capitalizedMessageText = messageText.toUpperCase();
        let encryptedString = '';
        for (let i = 0; i < capitalizedMessageText.length; i++) {
            let char = capitalizedMessageText.charCodeAt(i);
            if (this.isCharUpperCaseLetter(char)) {
                char += this.shiftValue;
                if (char > this.unicodeAlphabetCapLettersEnd) {
                    let overlap = char % this.unicodeAlphabetCapLettersEnd; //write test for this!
                    char = this.unicodeAlphabetCapLettersStart - 1 + overlap;
                }
            }
            encryptedString += String.fromCharCode(char);
        }
        return encryptedString;
    }
    /** takes an encrypted message and returns a lower case string with each letter shifted back in the alphabet based on the set shift value. */
    decrypt(encryptedMessage) {
        let decryptedString = '';
        for (let i = 0; i < encryptedMessage.length; i++) {
            let char = encryptedMessage.charCodeAt(i);
            if (this.isCharUpperCaseLetter(char)) {
                char -= this.shiftValue;
                if (char < this.unicodeAlphabetCapLettersStart) {
                    let overlap = this.unicodeAlphabetCapLettersStart % char; //write test for this!
                    char = this.unicodeAlphabetCapLettersEnd + 1 - overlap;
                }
            }
            decryptedString += String.fromCharCode(char);
        }
        return decryptedString.toLowerCase();
    }
}

const test = new ShiftCipher(1);
console.log(test.encrypt('Z')); // returns 'A'
console.log(test.decrypt('A')); // returns 'z'

const cipher = new ShiftCipher(2);
console.log(cipher.encrypt('I love to code!')); // returns 'K NQXG VQ EQFG!'
console.log(cipher.decrypt('K <3 OA RWRRA')); // returns 'i <3 my puppy'
