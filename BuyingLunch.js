function whosPaying(names) {
    //Write your code here.
   var person = Math.round(Math.random()*names.length); 
   var output = names[person] + " is going to buy lunch today!";
   return output;
    
}

var names = ["Angela","Ben","Jenny","Michael","Chloe"];
console.log(whosPaying(names));
