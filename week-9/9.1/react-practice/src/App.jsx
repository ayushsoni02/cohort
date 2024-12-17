import { useEffect, useState } from 'react'

import './App.css'

export default  function App() {

 let [count,setCount] = useState(0);
 let [count2,setCount2] = useState(0);

function increament(){
  setCount(c => c+1);
}

function decreamnet() {
  setCount2(c => c-1);
}


return <div>
  <Counter count={count} count2={count2} />
  <button onClick={increament}>Increase count</button>
  <button onClick={decreamnet}>decrease count</button>
</div>

function Counter(props){

  useEffect(function() {
    console.log("mount");

    return function(){
      console.log("unmount");
    }
  },[]);


  useEffect(function(){
    console.log("count has changed");

    return function(){
      console.log("cleanup inside second effect");
    }
  },[props.count])

  return <div>
    Counter1 {props.count} <br />
    Counter2 {props.count2} <br />
  </div>
}


}

