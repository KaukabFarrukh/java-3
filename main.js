function isValidPassword(password, username) {
    if (password.length < 8) {
        return false;
    }

    if (password.includes('')) {
        return false;
    }

    if (password.toLowerCase() .includes(username.toLowerCase())) {
        return false;
    }

    return true;
}