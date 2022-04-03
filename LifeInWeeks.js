function lifeInWeeks(age) {
    //Write your code here.
    var days = (90-age)*365;
    var weeks = (90-age)*52;
    var months = (90-age)*12;
    console.log("You have "+days+" days, "+weeks+" weeks, and "+months+" months left.");
}

age = prompt("How old are you?");
lifeInWeeks(age);
