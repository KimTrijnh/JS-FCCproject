//factorialize : n!=(n)(n-1)(n-2)...1;


function factorialize(num) {

    var arr=[];     
    for(i=1; i<=num; i++) {     arr.push(i);
   // create an Array by pushing all num, num-1,...,1.     }

     return arr.reduce(function(previousVal, currentVal) { 
     	return previousVal*currentVal;       }, 1);  /* use reduce function <array.reduce> to condense an array
     	 												to 1 value (here is to multiply all value together.*/
     	  }

factorialize(5);
