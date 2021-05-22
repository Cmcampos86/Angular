"use strict";
/*
let message: string = "Help me, Obi-Wan Kenobi. You're my only hope!";
console.log(message);

let episode: number = 4
console.log("This is episode " + 4)

episode = episode + 1
console.log("Next episode is " + episode)

//não indicar o tipo do valor, ele fica com o tipo any (nível de compatibilidade máximo)
let favoriteDroid
favoriteDroid = 'BB-8'
console.log("My favorite droid is " + favoriteDroid)

let isEnoughToBeatMF = function (parsecs: number) : boolean {
    return parsecs < 12
}

let distance = 14
console.log(`Is ${distance} parsecs enough to beat Millenni Falcon? ${isEnoughToBeatMF(distance) ? 'YES' : 'NO'}`) //Template strings: usa a crase ao inves das aspas

//Arrow Function
let call = (name: string) => console.log(`Do you copy, ${name}?`)
call('R2')

function inc (speed: number, inc: number = 1) : number {
    return speed + inc
}

console.log(`inc (5, 1) = ${inc(5, 1)}`)
console.log(`inc (5) = ${inc(5)}`)
*/
exports.__esModule = true;
var base_ships_1 = require("./base-ships");
var starfighters_1 = require("./starfighters");
//importa uma bilbioteca javascript
var _ = require("lodash");
console.log(_.pad("Typescript Examples", 40, "="));
var ship = new base_ships_1.Spacecraft('hyperdrive');
ship.jumpIntoHyperspace();
var falcon = new starfighters_1.MilleniumFalcon();
falcon.jumpIntoHyperspace();
var goodForTheJob = function (ship) { return ship.cargoContainers > 2; };
console.log("Is falcon good for the job? " + (goodForTheJob(falcon) ? 'yes' : 'no'));
