import { Component, useState } from 'react';
import './App.css'


 export class Content extends Component {
  
render() {
   let  {title,description,imageurl, newsUrl, author , date,source} = this.props;
   return (

     <>
                                
<div className="Conto">
  <div className="Cont-1">
    <img
      className="Image"
      src= 
      {imageurl}

      alt="Profile Picture"
    >   </img> <p className='posi' >{source}</p>

    <h3>
     {title}
    </h3>

    <p>
    {description}
    </p>
    

    <p  className='author' >By {!author ? "unknown" : author} on { new Date(date).toGMTString()} </p>
    

    <a    rel='Noreferrer' href={newsUrl} target="_blank" className="Read-More">Read More</a>
  </div>


  
  </div>
    
     </>


   )
  }
}


export default Content