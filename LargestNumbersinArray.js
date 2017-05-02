function largestOfFour(arr) {
  
   
  // You can do this!
  
  var maxArr =[];
  for(i=0; i<arr.length; i++) {
    maxArr.push(arr[i].reduce(function(a,b){return Math.max(a,b);}));
    
  }
  
  
  return maxArr;
       
 
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
