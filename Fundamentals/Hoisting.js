// Q1
console.log(hello); // undefined                           
var hello = 'world';  

console.log("--------------------------");

// Q2
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle); // magnet
}

console.log("--------------------------");

// Q3
var brendan = 'Super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan); // super cool


console.log("--------------------------");

// Q4
var food = 'chicken';
console.log(food); // chicken
eat();
function eat(){
    food = 'half-chicken';
    console.log(food); // half-chicken
    var food = 'gone';
}

// chicken
// half-chicken
console.log("--------------------------");

//Q5
mean(); // mean is not a function
console.log(food); // error
var mean = function() {
    food = "chicken";
    console.log(food); // chicken
    var food = "fish";
    console.log(food); // fish
}
console.log(food); // fish

// chicken
// fish
// error
console.log("--------------------------");

// Q6
console.log(genre); // undefined
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre); // rock
    var genre = "r&b";
    console.log(genre); // r&b
}
console.log(genre); // disco

// undefined
// rock
// r&b
//disco

console.log("--------------------------");

// Q7
dojo = "san jose";
console.log(dojo); // san jose
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo); //seattle
    var dojo = "burbank"; //burbank
    console.log(dojo);
}
console.log(dojo); //san jose

//san jose
//seattle
//burbank
//san jose
console.log("--------------------------");

// Q8
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {}; //{name: "chicago", students: 65, hiring:true} / {name: "Berkeley", students: 0, hiring:closed for now}
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now"; //error
    }
    return dojo;
}
// {name: "chicago", students: 65, hiring:true}
// {name: "Berkeley", students: 0, hiring:closed for now}
console.log("--------------------");
