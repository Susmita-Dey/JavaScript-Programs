// Creating a Constructor
function HouseKeeper(name, age, yearsOfExperience,cleaningExperience) {
    this.name=name;
    this.age=age;
    this.yearsOfExperience=yearsOfExperience;
    this.cleaningExperience=cleaningExperience;
}

// Initialising an Object
var houseKeeper1 = new HouseKeeper('Rumi',32,10,["Bathroom","Lobby"]);
console.log(houseKeeper1.name);
