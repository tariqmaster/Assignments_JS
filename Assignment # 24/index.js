let cities = [
{
    cityName: "karachi",
    countryCapital: true,
    industrialHub: true,
    populationSize: 25000000,
    numbewrOfUniversities: 30,
},
{
    cityName: "lahore",
    countryCapital: false,
    industrialHub: true,
    populationSize: 15000000,
    numbewrOfUniversities: 34,
},
{
    cityName: "multan",
    countryCapital: false,
    industrialHub: false,
    populationSize: 10000000,
    numbewrOfUniversities: 10,
},
{
    cityName: "faisalabad",
    countryCapital: false,
    industrialHub: true,
    populationSize: 5000000,
    numbewrOfUniversities: 10,
},
];

console.log(cities);

console.log("Testing conditions");

console.log("Is cities.cityName == 'karachi'? I predict true.");
console.log(cities[0].cityName == 'karachi');

console.log("Is cities[0].cityName != 'karachi'? I predict false.");
console.log(cities[0].cityName != 'karachi');

console.log("is Karachi a capital city: cities[0].countryCapital == true. I predict true.");
console.log(cities[0].countryCapital == true);

console.log("is Multan a capital city: cities[2].countryCapital == true. I predict false.");
console.log(cities[2].countryCapital == true);

console.log("is Multan's population is less than 2000000: cities[2].populationSize < 20000000. I predict true.");
console.log(cities[2].populationSize < 20000000);

console.log("is Karachi's population is less than 2000000: cities[2].populationSize < 20000000. I predict false.");
console.log(cities[0].populationSize < 20000000);

console.log("is Multan an industrial hub: cities[2].industrialHub == false. I predict true.");
console.log(cities[2].industrialHub == false);

console.log("is Faisalabad an industrial hub: cities[3].industrialHub == false. I predict false.");
console.log(cities[3].industrialHub == false);

console.log("Does Lahore have more than 30 universities: cities[1].numbewrOfUniversities>=30. I predict true");
console.log(cities[1].numbewrOfUniversities>=30);

console.log("Does Faisalabad have more than 30 universities: cities[3].numbewrOfUniversities>=30. I predict false");
console.log(cities[3].numbewrOfUniversities>=30);

//use of "and" and "or" operators.

console.log("Do Karachi and Lahore have more than 30 universities: cities[0].numbewrOfUniversities && cities[1].numbewrOfUniversities >= 30. I predict true");
console.log(cities[0].numbewrOfUniversities && cities[1].numbewrOfUniversities >= 30);


console.log("Do Karachi and Faisalabad have more than 30 universities: cities[0].numbewrOfUniversities || cities[3].numbewrOfUniversities >= 30. I predict true");
console.log(cities[0].numbewrOfUniversities >= 30 || cities[3].numbewrOfUniversities >= 30);

//comparision of strings.
console.log("Do Karachi and Lahore are not equal as an string. I predict true.");
console.log(cities[0].cityName != cities[1].cityName);

console.log(cities[0].cityName == "karachi");
console.log(cities[1].cityName != "lahore");

//comparision by lowercase and uppercase.

console.log('Do cities[0].cityName.slice(0,1).toUpperCase()+cities[0].cityName.slice(1)=="Karachi". I guess it is true.');
console.log(cities[0].cityName.slice(0,1).toUpperCase()+cities[0].cityName.slice(1)=="Karachi");

console.log('Do cities[0].cityName =="Karachi". I guess it is false.');
console.log(cities[0].cityName == "Karachi");


let rivers = ["Indus" , "Jehlum" , "Ravi" , "Kabul"];

console.log("Test whether an item is in a array");
console.log(rivers.includes("Indus"));

console.log("Test whether an item is not in a array");
console.log(rivers.includes("Chanab"));