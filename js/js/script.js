"use strict";



const result = confirm("Are you here?");
console.log(result);

const answers = [];

answers[0] = prompt('What is your name?','');
answers[1] = prompt('What is your family?','');
answers[2] = prompt('How old are you?','');


console.log(typeof(answers));
console.log(typeof(null));


const category = 'toys';
console.log(`https://someurl.com/${category}/5`); 
// Только при использовании косых`` ковычек, с обычными не получится


const user = "Vova";
alert(`Привет,${user}`);
// user cовмещаем с alert и на странице сайта получаем Привет Vova