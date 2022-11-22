let numberList = [1,2,3,4,5,6,7,8,9];


for(let x=0; x<numberList.length; x++){
    if(numberList[x]==1){
        console.log(numberList[x]+"st");
    }else 
    if(numberList[x]==2){
        console.log(numberList[x]+"nd");    
    }else 
    if(numberList[x]==3){
        console.log(numberList[x]+"rd");    
    }else 
    if(numberList[x]>3){
        console.log(numberList[x]+"th");    
}};
