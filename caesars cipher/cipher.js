const alphabet = [
    'A', 'B', 'C', 'D', 'E',
    'F', 'G', 'H', 'I', 'J',
    'K', 'L', 'M', 'N', 'O',
    'P', 'Q', 'R', 'S', 'T',
    'U', 'V', 'W', 'X', 'Y', 'Z'
];

function rot13(str) {
  let accumulator = '';

  for(let i = 0; i < str.length; i++){
    const char = str[i]
    const isALetter = alphabet.includes(char)

    if(isALetter == false){
      accumulator += char;
    } else {
      const charIndex = 
          alphabet.findIndex((c) => c === char)
      
      accumulator += alphabet[charIndex + 13] || alphabet[charIndex - 13]
    }
  }

  return accumulator;
}

rot13("SERR PBQR PNZC");