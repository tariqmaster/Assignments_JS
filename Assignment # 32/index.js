let current_user = ["admin","zia","daniyal","adil","amin","qasim"];

let new_user = ["tariq","Admin","daniyal","adeel","QASIM","bushra"];

for(let x=0;x<new_user.length;x++){
switch(new_user[x].toLowerCase()) {
    case current_user[0]:
    console.log(new_user[x]+" is already in use. You will need to enter a new username.");
    break;
    case current_user[1]:
    console.log(new_user[x]+" is already in use. You will need to enter a new username.");
    break;
    case current_user[2]:
    console.log(new_user[x]+" is already in use. You will need to enter a new username.");
    break;
    case current_user[3]:
    console.log(new_user[x]+" is already in use. You will need to enter a new username.");
    break;
    case current_user[4]:
    console.log(new_user[x]+" is already in use. You will need to enter a new username.");
    break;
    case current_user[5]:
    console.log(new_user[x]+" is already in use. You will need to enter a new username.");
    break;
    default:
        console.log(new_user[x]+" is available. You can create your account.");
    break;
   }
}
