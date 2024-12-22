import { useEffect, useState } from 'react'

import './App.css'

import { SidebarClass1 } from './components/answer/1-basic-project'
import SidebarToggle from './components/icons/SidebarToggle';

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
};

function App() {
  
  const [sidebarOpen,setSidebarOpen] = useState(true);
  const isDesktop = useMediaQuery("(min-width:768px)");

   useEffect(()=>{
      if(isDesktop==false){
        setSidebarOpen(false);
      }else{
        setSidebarOpen(true);
      }
   },[isDesktop])

  return (
    // <div className={"h-screen dark:bg-blue-600 text-yellow-600  bg-white dark:text-red-600"}>
    //    <button onClick={()=>{
    //     document.querySelector("html").classList.toggle("dark",document.querySelector('html').classList[0]=="dark"?false:true)
    //    }}>Click me </button>
    //   <div className='text-2xl dark:text-white text-red-600'>
    //     Hi there !
    //   </div>
      
    // </div>

    // <div className='h-screen bg-white dark:bg-black'>
    // <h1 className='text-black dark:text-white'>Hi there !</h1>
    // </div>

    <div className='flex'>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <MainComponent sidebarOpen={sidebarOpen}/>
    </div>
  )
}

function Sidebar({sidebarOpen,setSidebarOpen}){
 if(!sidebarOpen){
  return <div className='fixed top-0 left-0'>
  <div className='cursor-pointer hover:bg-slate-200' onClick={()=>{
     setSidebarOpen(!sidebarOpen);
   }}>
     <SidebarToggle/>
   </div>
</div>
 }
    return <div className='w-96 h-screen bg-red-100 fixed top-0 left-0 md:relative'>
    <div>
        <div className='cursor-pointer hover:bg-slate-200' onClick={()=>{
          setSidebarOpen(!sidebarOpen);
        }}>
          <SidebarToggle/>
        </div>
    </div>
  </div>
  }

function MainComponent(){
     return <div className='w-full'>
        <div className='h-52 bg-black hidden md:block'></div>
      <div className='grid grid-cols-11 gap-8 p-8'>
        <div className='h-96 rounded-2xl shadow bg-red-200 md:col-span-2 -translate-y-24 shadow-2xl col-span-11 hidden md:block'>
          
        </div>
        <div className='h-96 rounded-2xl shadow bg-green-200 md:col-span-6 shadow-2xl col-span-11'>

        </div>
        <div className='h-96 rounded-2xl shadow bg-yellow-200 md:col-span-3 shadow-2xl col-span-11'>

        </div>
      </div>
     </div>
}

export default App
