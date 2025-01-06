"use client"

import axios from "axios"
import { useRouter } from "next/navigation";
import { useState } from "react"

export default function Signup(){
      const [username,setUsername] = useState("");
      const [password,setPassword] = useState("");
      const route = useRouter();

    return <div className="w-screen h-screen flex justify-center items-center">
        <div className="border p-2">
              <input type="text" placeholder="username" onChange={e=>{
                setUsername(e.target.value);
              }}></input>
              <input type="text" placeholder="password" onChange={e=>{
                setPassword(e.target.value);
              }}></input>

              <button
               onClick={()=>{
                console.log(username);
                console.log(password);

              axios.post("http://localhost:3000/api/v1/signup" , {
                username,
                password
              })

              route.push("/signin");    
               }}>Sign up</button>
        </div>

    </div>
}