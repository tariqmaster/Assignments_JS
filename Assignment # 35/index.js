let animalList = ["Tiger","Leapord","Lion"];


for(let x=0; x<animalList.length; x++){
    if(animalList[x]=="Tiger"){
        console.log(animalList[x]+"  is the strongest among the big cat family.");
    }else 
    if(animalList[x]=="Leapord"){
        console.log(animalList[x]+" has the best speed and skills to climb on trees.");    
    }else 
    if(animalList[x]=="Lion"){
        console.log(animalList[x]+" lives like a real king and protects its teritory.");    
    }
};
console.log(`Big cat family have many different types of varities. 
They all are good hunters.`+ "\nBut I love "+animalList+" the most.");