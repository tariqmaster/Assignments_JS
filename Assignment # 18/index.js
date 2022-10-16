let locations = ["Kashmir","Makkah","Ziarat","Lahore","Abottabad"];              
console.log('My favourite places includes: ' + locations);   

console.log("Alphabatical Order: \n"+locations.slice().sort());
console.log('Original list: ' + locations);   

console.log("Reverse order: \n"+locations.slice().sort().reverse());
console.log('Original list: ' + locations);   

locations.reverse();
console.log("Reverse order of original list: \n"+ locations);

locations.reverse();
console.log("Original list again by reverse() method: \n"+ locations);

locations.sort();
console.log('Original list in alphabatical order: ' + locations);   

locations.sort().reverse();
console.log('Original list in reverse order: ' + locations);   