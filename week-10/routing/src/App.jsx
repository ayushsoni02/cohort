import { useState } from 'react'
import {BrowserRouter, Routes, Route,Link} from "react-router-dom";

function App() {

  return <div>
  <BrowserRouter>
    <Link to="/">Allen</Link>
    | 
    <Link to="/neet/online-coaching-class-11">Class 11</Link> 
    | 
    <Link to="/neet/online-coaching-class-12">Class 12</Link>
    <Routes>
      <Route path="/neet/online-coaching-class-11" element={<Class11Program />} />
      <Route path="/neet/online-coaching-class-12" element={<Class12Program />} />
      <Route path="/" element={<Landing />} />
      <Route path="*" element={<ErrorPage/>}/>
    </Routes>
  </BrowserRouter>
</div>
}

function ErrorPage() {
    return <div>
    Sorry page not found !
  </div>
}


function Landing(){
  return <div>
    Welcome to allen
  </div>
}

function Class11Program(){
  return <div>
    NEET programs for class 11th
  </div>
}

function Class12Program(){
  return <div>
    NEET programs for class 12th
  </div>
}

export default App
