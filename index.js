
signUp("bhavani");
signUp("krishna");
signUp("chandu");
signUp("niharika");

function signUp(userName){
    let usernames = ["ganga","bhavani","krishna","ravi"];

    for(let i=0;i<usernames.length;i++){

        if(userName == usernames[i]){
            console.log("user already registered, Please login");
            return;
        }
    }
        usernames.push("userName");
        console.log("signUp successfull, Please login");
       
}