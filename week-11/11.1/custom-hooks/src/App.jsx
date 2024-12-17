import { useEffect, useState } from 'react'
import './App.css'
import { usefetch, usePostTitle } from './hooks/usefetch'


 function useCounter(){
   const [count,setCount] = useState(0);

   function increaseCount(){
    setCount(count+1);
   }

   return{
    count:count,
    increaseCount: increaseCount
   }
 }

function App() {
  // const [currentPost,setCurrentPost] = useState(1);
  //  const {finalData,loading} = usefetch("https://jsonplaceholder.typicode.com/posts/"+ currentPost);

  const {count,increaseCount} = useCounter();

  //  if(loading){
  //   return <div>
  //     Loading...
  //   </div>
  //  }
  

    
  return (
    <div>  
      {/* <button onClick={()=>setCurrentPost(1)}>1</button>
      <button onClick={()=>setCurrentPost(2)}>2</button>
      <button onClick={()=>setCurrentPost(3)}>3</button>
   {JSON.stringify(finalData)}  */}
    <button onClick={increaseCount}>Increase {count}</button>
    </div>
  )
}


export default App
