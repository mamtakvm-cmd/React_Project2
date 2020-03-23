import React from 'react';
import {Link} from 'react-router-dom'
import './PostList.css'


const PostList =(props)=>{


const renderList=({datalist})=>{
     if(datalist){
     return datalist.map((item)=>{

       return (
         <Link to = {`/post/${item.id}`} key={item.id}>
         <div className="images col-md-4">
         <img src={item.img}/>
         <h3>{item.name}</h3>
         </div>
         </Link>
          
          )
       
       })
    }

}
  return(
      <div>
          {renderList(props)}
      </div>
    )
  }

  export default PostList;