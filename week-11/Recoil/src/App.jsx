

import { memo, useEffect, useState } from 'react'
import './App.css'
import {RecoilRoot, useRecoilCallback, useRecoilState, useRecoilValue, useSetRecoilState} from 'recoil'; 
import { counterAtom, evenSelector } from './store/atoms/counter';

function App() {
  
  return (
    <RecoilRoot>
    <Counter/>
    </RecoilRoot>
  )
}

const Increase = memo(() => {
   
  function increase(){
    
  }
  return <div>
    <button onClick={increase}>Increase</button>
  </div>
})

const Decrease = memo(() => {
  
  function decrease(){
  
  }
  return <div>
    <button onClick={decrease}>Decrease</button>
  </div>
})

const CurrentCount = memo(()=> {
  

  return <div>
      1
  </div>
})

function IsEven(){
  const even = useRecoilValue(evenSelector);

  return <div>
    {even? "Even" : "ODD"}
  </div>
}

function Counter(){
  //  const [count,setCount] = useState(0);
  const even = useRecoilValue(counterAtom);

   

  //  useEffect(()=>{
  //         setInterval(()=>{
  //           setCount(c => c+1);
  //         },3000);
  //  },[]);

  return <div>
   {count}

  {/* <CurrentCount />
  <Increase />
  <Decrease /> */}
  </div>
}

export default App
