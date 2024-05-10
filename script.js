function encrypt() {
    var message = document.getElementById("encryption-message").value;
    var shiftAmount = parseInt(document.getElementById("encryption-shift-amount").value);
    var encryptedMessage = caesarCipher(message, shiftAmount);
    document.getElementById("encrypted-message").value = encryptedMessage;
}

function decrypt() {
    var message = document.getElementById("decryption-message").value;
    var shiftAmount = parseInt(document.getElementById("decryption-shift-amount").value);
    var decryptedMessage = caesarCipher(message, -shiftAmount); // Decrypt by shifting in the opposite direction
    document.getElementById("decrypted-message").value = decryptedMessage;
}

function clearEncryption() {
    document.getElementById("encryption-message").value = "";
    document.getElementById("encrypted-message").value = "";
}

function clearDecryption() {
    document.getElementById("decryption-message").value = "";
    document.getElementById("decrypted-message").value = "";
}

function caesarCipher(message, shiftAmount) {
    var result = "";
    for (var i = 0; i < message.length; i++) {
        var charCode = message.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) { // Uppercase letters
            result += String.fromCharCode(((charCode - 65 + shiftAmount) % 26) + 65);
        } else if (charCode >= 97 && charCode <= 122) { // Lowercase letters
            result += String.fromCharCode(((charCode - 97 + shiftAmount) % 26) + 97);
        } else {
            result += message.charAt(i); // Non-alphabetic characters
        }
    }
    return result;
}