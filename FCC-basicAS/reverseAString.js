function reverseString(str) {
  
  
   var arr=str.split(''); //split string into array;
  
  var reArr=arr.reverse(); //reverse array;
  
  var reStr= reArr.join(''); //join array to string;
  
  return reStr ; // return result: reStr;
}

reverseString("this is reverse a string"); // 
