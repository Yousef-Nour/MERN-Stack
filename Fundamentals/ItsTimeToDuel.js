class Card{
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card{
    constructor(name, cost, power, resilience){
        super(name, cost);
        this.power = power;
        this.resilience = resilience;
    }

    attack(target){
        target.resilience -= this.power;
    }

    status(){
        console.log(
            "Name : "+this.name+"\n"
            +"Cost : "+this.cost+"\n"
            +"Power : "+this.power+"\n"
            +"Resilience : "+this.resilience
        );
    }
}

class Effect extends Card{
    constructor(name, cost, text, stat, magnitude){
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }

    play(target) {
        if( target instanceof Unit ) {
            if(this.stat == "resilience"){
                if(this.magnitude.charAt(0) == "+"){
                    target.resilience += parseInt(this.magnitude.charAt(1));
                }else{
                    target.resilience -= parseInt(this.magnitude.charAt(1));
                }
            }else{
                if(this.magnitude.charAt(0) == "+"){
                    target.power += parseInt(this.magnitude.charAt(1));
                }else{
                    target.power -= parseInt(this.magnitude.charAt(1));
                }
            }
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
}

const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);

const hardAlgorithm = new Effect("Hard Algorithm", 2, "increase target's resilience by 3","resilience", "+3");
const unhandledPromiseRejection = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2","resilience", "-2");
const pairProgramming = new Effect("Pair Programming", 3, "iincrease target's power by 2","power", "+2");

console.log(
    blackBeltNinja.status()
);
console.log("--------------------");

console.log(
    redBeltNinja.status()
);
console.log("--------------------");

hardAlgorithm.play(redBeltNinja);
redBeltNinja.status();
console.log("--------------------");

unhandledPromiseRejection.play(redBeltNinja);
redBeltNinja.status();
console.log("--------------------");

pairProgramming.play(redBeltNinja);
redBeltNinja.status();
console.log("--------------------");

redBeltNinja.attack(blackBeltNinja);
blackBeltNinja.status();


