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

console.log("Does Lahore have more than 30 universities: cities.numberOfUniversities >= 30. I predict true");
console.log(cities[1].numbewrOfUniversities>=30);

console.log("Does Faisalabad have more than 30 universities: cities.numberOfUniversities >= 30. I predict false");
console.log(cities[3].numbewrOfUniversities>=30);