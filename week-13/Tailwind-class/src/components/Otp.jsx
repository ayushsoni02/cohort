import { useRef, useState } from "react";

export default function Otp(){
    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();
    const ref4 = useRef();
    const ref5 = useRef();
    const ref6 = useRef();

  const [disabled,setDisabled] = useState(true);

  return <div className="flex justify-center">
     <SubOtpBox reference={ref1} onDone={()=>{
        ref2.current.focus();
     }}/>
     <SubOtpBox reference={ref1} onDone={()=>{
        ref2.current.focus();
     }}/>
     <SubOtpBox reference={ref1} onDone={()=>{
        ref2.current.focus();
     }}/>
     <SubOtpBox reference={ref1} onDone={()=>{
        ref2.current.focus();
     }}/>
     <SubOtpBox reference={ref1} onDone={()=>{
        ref2.current.focus();
     }}/>
     <SubOtpBox reference={ref1} onDone={()=>{
        ref2.current.focus();
     }}/>

      
  </div>



}

function SubOtpBox({
    reference , onDone
    
}) {
    return <div>
        <input ref={reference} onChange={(e) => {
            onDone()
        }} type="text" className="m-1 w-[40px] h-[50px] rounded-2xl bg-blue-500 outline-none px-4 text-white"></input>
    </div>
}