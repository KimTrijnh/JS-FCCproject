function palindrome(str) {
  
   // Good luck!
  
 var forStr= str.toLowerCase().replace(/[^a-z0-9]/g,""); // forStr: string is arrange forward after remove non-aphanumeric charaters;
  
  var reStr= forStr.split('').reverse().join(''); // reverse the forStr
  
  if (forStr==reStr) {
  return true;
}

else {
  return false;
}

 
  
}



palindrome("eye");
