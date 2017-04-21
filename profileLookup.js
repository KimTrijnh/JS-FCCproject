//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(firstName, prop){

  
 
 // use loop 
 var i=0;
  for(i=0; i<contacts.length+1; i++) {
              if (i<contacts.length) {

                 if (firstName === contacts[i].firstName) {

                      if (  contacts[i].hasOwnProperty(prop)  )
                            {  return contacts[i][prop]; }

                      else { return "No such property";}

                    }
                else { console.log(i);}
              }
    
     else {return "No such contact";}
  }
  

 
 /*-- use If manually for each contact 

if (firstName === contacts[0].firstName) {
   
   if (contacts[0].hasOwnProperty(prop)) {
     return contacts[0][prop];}
   
     else { return "No such property"; } }
   
  else if (firstName === contacts[1].firstName) {
   if (contacts[1].hasOwnProperty(prop)) {
     return contacts[1][prop];}
   
     else { return "No such property"; } }
   
 else if (firstName === contacts[2].firstName) {
  if (contacts[2].hasOwnProperty(prop)) {
     return contacts[2][prop];}
   
     else { return "No such property"; } } 
     
 else if (firstName === contacts[3].firstName) {
      if (contacts[3].hasOwnProperty(prop)) {
     return contacts[3][prop];}
   
     else { return "No such property"; } }
   
     
   else { return "No such contact";}      */
  
} 

lookUpProfile("Bob", "lastName");
         
  
  


  
  
       
 