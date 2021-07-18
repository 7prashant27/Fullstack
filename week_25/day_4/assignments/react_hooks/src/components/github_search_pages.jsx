import React, {useState,useEffect} from 'react';
import axios from "axios"

function GithubPages () {
  
   const [query,setQuery]=useState("")
   const [data,setData]=useState(null)
   const [page,setPage]=useState(1)


   useEffect(()=>{
      axios.get(`https://api.github.com/search/users`,{
        params:{
          q:"masai",
          page:page

        }
      }).then((res)=>setData(res.data.items)).catch((err)=>console.log(err))
   },[page,query])


   const handleClick = () =>{
     axios.get(`https://api.github.com/search/users`,{
       params:{
           q:query,
           page:page
       }
     }).then((res)=>setData(res.data.items)).catch((err)=>console.log(err))
   }



  return (
    <div className="App">
    
      <div><h1>GITHUB SEARCH USER</h1></div>
      <input value={query} onChange={(e)=>setQuery(e.target.value)} />
      <button onClick={handleClick}>SEARCH</button>
      <select onChange={(e)=>setPage(e.target.value)}>
        {[1,2,3].map((item)=>(
          <option key={item} value={item}>
            {" "}
            {item}
          </option>
        ))}
      </select>
      {data && data.map((item)=><div key={item.id}> {item.login}</div>)}
      


   </div>

  );
 }

export default GithubPages;