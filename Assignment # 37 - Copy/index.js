let exp = 'name=ali;age=45;prof=dev;color=red';
/*
result ={
    name: 'ali',
    age: 45,
    prof:'dev'
}

let result1 = JSON.parse('{"name":"John", "age":30, "city":"New York"}');

console.log(result1);
*/
/*
console.log('one');
const getDateFromServer = (cb)=>{
    console.log('gettingdata from server....');
    setTimeout(()=>{
        console.log('data received from server....');
        let data ='555';
        cb(data);
    }, 1000)
};

const callback =(data)=>{
  console.log(data);
    };

getDateFromServer(callback);
*/
/*

const doneWithAlluParath = (message)=>{
    console.log(message);
}
const makeAlluParatha = (callback)=>{
    setTimeout(() => {
        callback('Paratha done!');
    }, 2000);
}

const makeMeethiLassi = (callback)=>{
    setTimeout(() => {
        callback('Lassi done!');
    }, 2000);
}

makeAlluParatha(function(){
    console.log('paratha done.');
    console.log('dakaar!');
    console.log('Want Lassi');
    makeMeethiLassi(function(){
        console.log('Lassi is ready!');
    });
});
*/
function getAlluParathaPromise(){
    const alluParathaPromise = new Promise((resolveCallback, rejectCallback)=>{
        const mood = 6;
        if(mood > 5){
            setTimeout(() => {
                resolveCallback('Paratha is ready!');
            }, 3000);
           
        }else{
            rejectCallback('Too tired.');
        }
    });
   return alluParathaPromise; 
};

function main(){

    getAlluParathaPromise()
    .then((Response)=>{
        console.log('Response', Response);
    })
    .catch((error)=>{
        console.log('error', error);
    });
}

//main();

async function main2(){
    try{
        const result = await getAlluParathaPromise();
        console.log(result)      
    }
   catch(error){
    console.log(error)
   } finally{
    console.log('it will always run.')
   }
}

main2();

function getLassiPromise(){
    const lassiPromise = new Promise((resolveCallback, rejectCallback)=>{
        const stomachPromise = 2;
        if(stomachPromise < 9){
            setTimeout(() => {
                resolveCallback('Lassi is ready!');
            }, 3000);
           
        }else{
            rejectCallback('I am full.');
        }
    });
   return lassiPromise; 
};

async function main4(){
    try{
        const paratha = await getAlluParathaPromise();
        const lassi = await getLassiPromise();
    }catch(error){
        console.log('error',error);
    }
}

function main5(){

    getAlluParathaPromise()
    .then((Response)=>{
        console.log('Response', Response);
        return getLassiPromise();
    }).then(Response)=>{
        console.log(Response);
    }
    .catch((error)=>{
        console.log('error', error);
    });
}

main5();
