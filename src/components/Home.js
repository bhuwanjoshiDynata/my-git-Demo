import React, { Component } from 'react'
//import axios from 'axios'
import { Link } from 'react-router-dom'
import { useState, useEffect} from 'react'

const Home = ()=> {
const [posts, setPosts] = useState([]);

useEffect(()=>{
  fetch("https://jsonplaceholder.typicode.com/posts/").then(response => {
    //console.log("response: "+response)
    return response.json();
}).then(data =>{
    console.log(data);
    //setGetData (data);
    //setPosts(data.slice(0,10));
    setPosts(data);
}).catch(err =>{
    console.log("Error: "+err);
})
},[]);

return (
	<div className="container">
	  <h4 className="center">Home</h4>
	  {posts && posts.map(post =>{
      return(
      <div key={post.id}>
      <Link to={'/' + post.id}>
      {post.title}
      </Link>
      </div>
      )
    })}
    </div>
    )
}
export default Home