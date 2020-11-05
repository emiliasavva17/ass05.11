'use strict';


/*
 * generates random natural numbers between 1 and foo
 */
const roll = function (foo) {    
    return Math.floor(Math.random() * foo) + 1;
}

// usage
let x = roll(37);   // generates a random natural number such that 1 < x < 37

document.getElementById('myidd').innerHTML = x;