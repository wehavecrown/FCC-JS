function palindrome(str) {

    const onlyAlphaNum = str
      .toLowerCase()
      .match(/[a-z0-9]/g)
  
    return onlyAlphaNum.join('') === onlyAlphaNum.reverse().join('');
  }
  
  console.log(palindrome("ada"));