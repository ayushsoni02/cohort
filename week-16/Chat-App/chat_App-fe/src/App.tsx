import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [messages,setMessages] = useState(["hello from the server!"]);

 const wsRef = useRef(); 
 const inputRef = useRef<HTMLInputElement>(null); 

  useEffect(()=>{
    const ws = new WebSocket("http://localhost:8080");
    ws.onmessage = (event) => {
      setMessages(m => [...m, event.data]) 
    }

     //@ts-ignore
   wsRef.current = ws;

   // When connection opens, send join room message
   ws.onopen = () => {  
     ws.send(JSON.stringify({
       type:"join",
       payload:{
         roomId: "red" // Join room with ID "red"
       }
     }))
   }

   // Cleanup: close WebSocket when component unmounts
   return () => {
     ws.close();
   }
  },[])

  return (
 <div className='h-screen bg-black'> 
 <br /> <br />  
   <div className='h-[80vh]'>
    {messages.map(messages => <div className='m-5 p-3'>
      <span className='bg-white text-black rounded p-3'>
        {messages}
        </span>
      </div>
    )}
   </div>
   <div className='w-full bg-white flex'>
    <input ref={inputRef} id="message" className='flex-1 p-4 rounded-md' ></input>
    <button onClick={()=>{
         // @ts-ignore
         const message = inputRef.current?.value; 
         // @ts-ignore
         wsRef.current.send(JSON.stringify({
           type: "chat",
           payload: {
             message: message
           }
         }))
    }} className='bg-purple-600 text-white p-4 rounded-md'>Send message</button>
   </div>
 </div>
  )
}

export default App
