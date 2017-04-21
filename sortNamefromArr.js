var products =[["Underspants",6.99],["Socks",5.99],["T-Shirt", 14.99],["Trousers", 31.99],["Shoes", 23.99]];
var namelist =[];

function sortname(productArray){

for(i=0; i<productArray.length; i++) {
namelist.push(productArray[i][0]);
                 } 
return namelist;
}

sortname(products); // ["Underspants", "Socks", "T-Shirt", "Trousers", "Shoes"]



var products =[["Underspants",6.99],["Socks",5.99],["T-Shirt", 14.99],["Trousers", 31.99],["Shoes", 23.99]];
var namelist =[];

function sortname(productArray){

for(i=0; i<productArray.length; i++) {
namelist.push(productArray[i][0]);
return namelist; // move return into for loop --> return will stop the loop when it execute.
                 } 

}

sortname(products); // only the first loop:  ["Underspants"]