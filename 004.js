function palindrome(str) {
  var reg = /[\W_]/g; // /[^A-Za-z0–9]/g 
  var lowerStr = str.toLowerCase().replace(reg, '');
  // console.log(lowerStr);
  var reverse = lowerStr.split('').reverse().join('');
  //console.log(reverse);
  if(reverse === lowerStr){
  	console.log(true);
  }
  else{
  	console.log(false);
  }
}

palindrome("Cigar? Toss it in a can. It is so tragic") // output true
palindrome("I did, did I?") // output true
palindrome("Red rum, sir, is murder") // output true
palindrome("Eva, can I see bees in a cave?") // output true
palindrome("Hello World") // output false