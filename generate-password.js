function generatePassword(length, level, count) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const digits = '0123456789';
  const symbols = '!#$%&()*+,-./:;<=>?@[]^_{|}~';
  let passArr = [];
  let newPassword = '';

  for(let i = 0; i < length; i++) {
    const randomChar = alphabet[getRandomInt(alphabet.length)]; 
    let randomDigit = digits[getRandomInt(digits.length)]
    let randomSymbol = symbols[getRandomInt(symbols.length)]
    if (level == 'hard') {
      newPassword += randomChar + randomDigit + randomSymbol;
    } else if (level == 'medium') {
      newPassword += randomChar + randomDigit;
    } else if (level == 'easy') {
      newPassword += randomChar;
    } else {
      return `Неверно указана сложность пароля.`
    }
    
  }

  if (count == undefined) {
    return newPassword.split('').sort((a, b) => Math.random() - 0.5).slice(0, length).join('');
  } else {
    for (let i = 0; i < count; i++){
      passArr.push(generatePassword(length, level))
    }
    return passArr;
  }
}

console.log(generatePassword(10, 'hard', 2));

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}