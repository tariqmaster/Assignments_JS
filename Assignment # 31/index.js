let userList = ["admin","zia","daniyal","adil","amin","qasim"]

let userName = prompt("Enter your user name.");


if(userName==userList[0]){
    console.log("Hello admin, would you like to see a status report?");
}
else
for(let x=1;x<userList.length;x++){
if(userName==userList[x]){
    console.log("Hello! " + userName + ", thank you for logging in again."); 
    break;
}else 
if(userName!=userList[x])
{
    console.log("Hello! "+userName+", your user name is not identified.");
    break;
}
}

while(userList.length > 0) {
    userList.pop();
}

let yarna = userList.slice(0,userList.length);
console.log("\n\nHello! Now our list is empty, We need to find some users!");
