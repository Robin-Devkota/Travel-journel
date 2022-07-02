import React from 'react'
import Navbar from './Navbar'
import {data} from './data'
import Blog from './Blog'
function App() {
    const cards=data.map(item=>{
        return(
            <Blog key={item.id} 
           item={item} 
            />
        )
    })
  return (
    <div>
    <Navbar />
    <section className="section">
        {cards}
        </section>
    </div>
  )
}

export default App