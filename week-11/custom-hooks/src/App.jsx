import { useEffect, useRef, useState } from 'react'
import './App.css'

import useFetch from './hooks/usefetch';
// import useDebounce from './hooks/useDebounce';
import { usePrev } from './hooks/usePrev';


         // another way to declare useDebounce :: --

function useDebounce(orginalFn){
  const currentClock  = useRef();

  const fn = () => {
    clearTimeout(currentClock.current);
    currentClock.current = setTimeout(orginalFn,200);
  }

  return fn;
}

function App(){
   function sendDataToBackend(){
    fetch("api.amazon.com/search/")
   }


   const debounceFn = useDebounce(sendDataToBackend);

   return (
    <>
    <input type="text" onChange={debounceFn} />
    </>
   );
}















// function App() {
//    const [state,setState] = useState(0);
//    const prev = usePrev(state);
  
  
  
  
           
//               // for useDebounce ::--

//   // const [inputValue,setinputValue] = useState("");
//   // const debounce  = useDebounce(inputValue,200);
   
  
//   // function change(e){
//   //   setinputValue(e.target.value)
//   // }


//   // useEffect(() => {
//   //   console.log("expensive Operation");
//   // },[debounce]);




//                  // for useFetch  :: --

// //  const [currentPost,setCurrentPost] = useState(1);
// //  const {finalData,loading} = useFetch('https://jsonplaceholder.typicode.com/posts/'+currentPost);

// //   if(loading){
// //     return <div>
// //       Loading....
// //     </div>
// //   }

//   return (
//     <div>  
//       {/* <input id='input' type="text" onChange={change} /> */}

//       <p>{state}</p>
//       <button onClick={()=>{
//         setState((curr)=> curr +1);
//       }}>Click me </button>
//       <p>the prev value was {prev}</p>
//     </div>
//   );
// }


export default App
