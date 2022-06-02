import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css';
let  page_num=1;

function App() {
  const [state,setState]=useState([]);
  const [page,setPage]=useState(page_num);
  useEffect(()=>{
    fetch (`https://api.instantwebtools.net/v1/passenger?page=${page}$size=5`)
    .then(res=>res.json())
    .then(json=>setState([...state,...json.data]))
    console.log(state)

  },[page])

  const scrollToEnd=()=>{
    setPage(page+1)
  }


  window.onscroll=function (){
    //check if the page has scrolled to bottom
    if(window.innerHeight+document.documentElement.scrollTop===document.documentElement.offsetHeight){
      scrollToEnd()
    }
  }

  return (
    <div className="App">
      <h2 id='display'>Display Infinite Scroll Bar</h2>
      {(state.length>0) && state.map((el,i)=>
        <div key={i} className='container'>
          <h4> Id:{el._id}</h4>
          <h4>Name:{el.name}</h4>
          <h4>Trips:{el.trips}</h4>

        </div>
      )}
     
    </div>
  )
}

export default App
