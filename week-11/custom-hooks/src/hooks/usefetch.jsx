import { useEffect, useState } from "react";


// export function usePostTitle(){
//     const [post,setPost] = useState({});

//     async function getPost(){
//       const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//       const json = await response.json();  
//       setPost(json);
//     }
  
  
//     useEffect(()=>{
//       getPost();
//     },[])

//      return post;
// }

export default function useFetch(url){
   const [finalData,setFinalData] = useState({});
   const [loading,setLoading] = useState(true);

    async function getData(){
      setLoading(true);
      const response = await fetch(url);
      const json = await response.json();     
      setFinalData(json);
      setLoading(false);
    }



   useEffect(() =>{
    getData();
   },[url])

   return {
    finalData,
    loading
   }
}