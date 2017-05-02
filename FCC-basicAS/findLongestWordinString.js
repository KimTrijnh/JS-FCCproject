function findLongestWord(str) {
  
  var arr = str.split(" ");
  
         //transform arr to numberArr contains numbers = arr.lengths;
    
  var numberArr=[];
    for(i=0; i<arr.length;i++) {numberArr.push(arr[i].length);}
     
    
    return numberArr.reduce(function(a,b){return Math.max(a,b);});
  
  
}
                                 

findLongestWord("The quick brown fox jumped over the lazy dog");
