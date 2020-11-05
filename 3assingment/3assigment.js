'use strict';

const roll = function ()

{
	return Math.floor(Math.random()*6)+1;
}

const display =function(){
	let dices,dicelen,i,x;

	dices=[''];
	dicelen=5;

	for(i=0; i<dicelen; i++){
		dices[i]=roll();
		console.log(dices[i]);
	}

	let all='';

	for(i=0; i<dicelen; i++){
		all+= `<span style="border: solid black 2px; padding: 20px; margin:20px;">${dices[i]} </span>` ;	
	}
	return all;

}
document.write(display());
