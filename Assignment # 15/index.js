let friends = ["Shariq","Tariq","Yasir"];              
console.log('Please check my guest list:');   

console.log(' Hello '+friends[0]+' You are invited on my birthday. ');
console.log(' Hello '+friends[1]+' You are invited on my birthday. ');
console.log(' Hello '+friends[2]+' You are invited on my birthday. ');


console.log(friends[0]+' is not coming. ');

friends.shift();

console.log("My remaining guests left are " + friends);

friends.unshift("Aslam");

console.log("My new guest list includes " + friends);

console.log(' Hello '+friends[0]+' You are invited on my birthday. ');
console.log(' Hello '+friends[1]+' You are invited on my birthday. ');
console.log(' Hello '+friends[2]+' You are invited on my birthday. ');


