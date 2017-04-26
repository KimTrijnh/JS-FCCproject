
function titleCase(str) {
  
 var arr= str.split(" ");
 var arrUpper =[];
  
  for (i=0; i< arr.length; i++) {
    
  var upperStr = arr[i].toLowerCase().charAt(0).toUpperCase() + arr[i].toLowerCase().substr(1);
  arrUpper.push(upperStr);
  }
  
  /* note: var arr = [Skfdk, skeOSDm, ABFSC];

var lowStr=arr[0].toLowerCase();
var firstChar = lowStr.charAt(0);
var upperChar = firstChar.toUpperCase();
var upperStr = upperChar + lowStr.substr(1); 
*/
  
 return arrUpper.join(" ");
  
}

titleCase("sHoRt AnD sToUt");