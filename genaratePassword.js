




const generatePassword = (length) => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=<>?";
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomPassword = Math.floor(Math.random() * characters.length);
        password += characters.charAt(randomPassword);
    }
    return password;
}

const result = generatePassword(10);
console.log(result)
