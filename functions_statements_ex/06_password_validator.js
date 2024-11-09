function validatePassword(password) {
    const validLength = password.length >= 6 && password.length <= 10;
    const validChars = /^[a-zA-Z0-9]+$/.test(password);
    const validDigitsCount = /(?=.*\d.*\d)/.test(password);

    if (!validLength) {
        console.log('Password must be between 6 and 10 characters');
    }
    if (!validChars) {
        console.log('Password must consist only of letters and digits');
    }
    if (!validDigitsCount) {
        console.log('Password must have at least 2 digits');
    }

    if (validLength && validChars && validDigitsCount) {
        console.log('Password is valid');
    }
}

// validatePassword('logIn');
// validatePassword('MyPass123');
// validatePassword('Pa$s$s');
