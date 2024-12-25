  // interface User {
  //   name : string,
  //   age : number,
  //   address?: Address
  // }

  // interface Address {
  //   country?:string,
  //     city? : string,
  //     pincode?:number
  // }

  // interface office {
  //   address : Address
  // }


  // let user1 : User = {
  //   name : "ayush",
  //   age : 18,
  //   address : {
  //     country :"India",
  //     city : "konch",
  //     pincode: 285205
  //   }

  // }


  // interface People {
  //   name : string,
  //   age : number,
  //   greet: ()=>string,
  // }


  // let person : People = {
  //   name : "rohan",
  //   age : 18,
  //   greet : ()=>{
  //     return "Namaste"
  //   }
  // }

  // let greeting = person.greet();
  // console.log(greeting);
  
                  // classes in typescript :

  //  interface People {
  //   name : string;
  //   age : number;
  //   isLegal(): boolean;
  // }

  // class Manager implements People{
  //   name: string;
  //   age: number;

  //   constructor(name:string,age:number){
  //     this.name = name;
  //     this.age = age;
  //   }

  //   isLegal() {
  //       return this.age > 18;
  //   }
  // }
  
  // let m1 = new Manager("ayush",18);
  // console.log(m1.name);


           // intersection

//   type Employee = {
//     name : string;
//     startDate : string;
//   }

//   type Manager = {
//     name : string;
//     department : string;
//   }

//   type TeamLead = Employee & Manager;

// let e : Employee = {
//   name : "ayush",
//   startDate : "01-10-2024"
// }

// let m : Manager = {
//   name : "ayush",
//   department : "Electricity"
// }

// let T : TeamLead = {
//   name : "",
//   startDate : "",
//   department : ""
// }


          // union 







           // Assignment 
           
// type User = {
//   name : string; 
//   age : number;

// }

// type Admin = {
//   name : string;
//   age : number;
// }

         // Array in TS

//  function getMax(arr:number[]){
//   let max = -100000;
//   for(let i=0;i<arr.length;i++){
//     if(arr[i]>max){
//       max = arr[i];
//     }
//   }
//   return max;
//  }        

//  getMax([1,3,4,6])
  

            // Assignment 


// interface User {
//   firstName : string;
//   lastName : string;
//   age : number;
// }

// function isLegal(user : User[]){
//   let ans = []
//   for(let i=0;i<user.length;i++){
//     if(user[i].age>18){
//       ans.push(user[i]);
//     }
//   }
//   return ans;
// }


// interface User {
//   name : string;
//   age : number;
// };

// function sumofAge(user1 : User, user2 :User){
//   return user1.age + user2.age;
// }

// const resultant_age = sumofAge({name : "ayush",age: 18},{name : "rohan",age : 20});

// console.log(resultant_age); 


         // use of pick 

// interface User{
//   name :string;
//   age : number;
//   email : string;
//   password : string;
//   id : number;
// }

// type Userprofile = Pick<User , "name" | "age" | "email">;

//             // Partial 

//   type UpdateProps = Partial<User>;

          // Readonly

  // interface Config {
  //   readonly endpoint : string;
  //   readonly apikey : string;
  // }        

  // const config : Readonly <Config> = {
  //   endpoint : "https://api.google.com",
  //   apikey : "12345"
  // }

  // config.endpoint = "https://api.amazon.com";


              // Exclude

//  type EventType = 'click' | 'scroll' | 'mousemove';
//  type ExcludeType = Exclude<EventType,'scroll'>;
 
//  const handleEvent = (event: ExcludeType) => {
//   console.log(`Handling event : ${event}`);
  
//  };

//  handleEvent('scroll');

            // Record 

interface User {
  id : string;
  name : string;
}

type Users = Record<string,User>;

const users : Users = {
  'abcxyz' : {id: 'abc123', name: 'ayush'},
  'xyz789' : {id: '32843', name: 'astitva'},
};

console.log(users['xyz789']); 
