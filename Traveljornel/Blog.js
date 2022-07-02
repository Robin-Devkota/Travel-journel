import { LocationOn } from '@mui/icons-material'
import React from 'react'
import './Blog.css'
function Blog(props) {
  
  return (
    <div className='blog'>
        <div className="div1">
           <img src={props.item.imageUrl} className='images'/>
              <div className="div2">
           <LocationOn className='loc'/>
           <a href={props.item.googleMapsUrl}>View on GoogleMaps</a>
           <div className="txt">
            <h1>{props.item.title}</h1>
            <p className='p1'>{props.item.startDate}-{props.item.endDate}</p>
            <p>{props.item.description}</p>
           </div>
        </div>
        </div>
        

       

    </div>
  )
}

export default Blog