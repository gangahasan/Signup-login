
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

login("ganga","Emp@123");
login("bhavani","emp123");
login("chandu", "Emp@123");
login("niharika", "emp123");

function login(userName,password){
     let usernames = ["ganga", "bhavani", "krishna", "ravi"];

    for(let i=0;i<usernames.length;i++){
        if(userName == usernames[i]) {

            if(password == "Emp@123"){
                console.log("Login Successfull");
                 return;
            }
            else{
                console.log("Wrong Password");
                return;
            }
        }
    }
    console.log("User Not Found, Please Sign Up");
}