
interface UserType {
   firstName: string,
   lastName: string,
   age:number
}




function greet(user:UserType){
    console.log(user.firstName);
    
  }

  let user:UserType = {
    firstName : "ayush",
    lastName:"soni",
    age : 18,
  }

  greet(user);