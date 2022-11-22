let fruits = ["banana","mango","apple","apricot","pear","strawberry"]

let choiceFruit = prompt(`which is your favorit fruit?check this list
        \n "banana","mango","apple","apricot","pear","strawberry"
        \nPlease write name of your favourit fruit.`);


if(fruits[0]==choiceFruit){
    console.log("you really like banana.");
}else
if(fruits[1]==choiceFruit){
    console.log("you really like mango."); 
}else
if(fruits[2]==choiceFruit){
    console.log("you really like apple."); 
}else
if(fruits[3]==choiceFruit){
    console.log("you really like apricot."); 
}else
if(fruits[4]==choiceFruit){
    console.log("you really like pear."); 
}else
if(fruits[5]==choiceFruit){
    console.log("you really like strawberry."); 
}else{
    console.log("you really like " + choiceFruit + ". I love some other fruits."); 
}