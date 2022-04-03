function lifeInWeeks(age) {
    //Write your code here.
    var yearsLeft = (90-age);
    var days = yearsLeft*365;
    var weeks = yearsLeft*52;
    var months = yearsLeft*12;
    console.log("You have "+days+" days, "+weeks+" weeks, and "+months+" months left.");
}

age = prompt("How old are you?");
lifeInWeeks(age);
