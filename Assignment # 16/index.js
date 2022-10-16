let friends = ["Shariq","Tariq","Yasir"];              
console.log('Please check my guest list:');   

for(var n=0; n<friends.length; n++){
    console.log(' Hello '+friends[n]+' You are invited on my birthday. ');
}

//Elemenating 1st guest.
console.log(friends[0]+' is not coming. ');

friends.shift();
//Guest left include.
console.log("My remaining guests left are " + friends);

//Adding one new guest.
friends.unshift("Aslam");

// Printing my new Guest list.
console.log("My new guest list includes " + friends);

//Adding one mor person in the start of array.
friends.unshift("Anwar");

console.log("My new guest list includes " + friends);

for(var n=0; n<friends.length; n++){
    console.log(' Hello '+friends[n]+' You are invited on my birthday. ');
}

//Adding one mor person in the middle of array.
friends.splice(2, 0, "Hasan");

console.log("My new guest list includes " + friends);

friends.push("Farhan");

for(var n=0; n<friends.length; n++){
    console.log("Guest # "+ (n+1) +') Hello '+friends[n]+' You are invited on my birthday. ');
}

