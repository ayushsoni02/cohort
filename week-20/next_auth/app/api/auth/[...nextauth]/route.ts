import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";

const handler = NextAuth({
   providers:[
    CredentialsProvider({
        name: "email",

        credentials: {
          username: { label: "Username", type: "text", placeholder: "ayush@gmail.com" },
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials, req) {
          const username = credentials?.username;
          const password = credentials?.password;
          console.log(username);
          console.log(password);
          
          const user = {
            name : "ayush",
            id:"1",
            username:"ayush@gmail.com"
          }

          if(user){
            return user;
          }else{
            return null;
          }


        }
      })
   ]
})

export {handler as GET, handler as POST}