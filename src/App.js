import React, { useState } from "react";
import "./App.css";
import Post from "./Post";

function App() {
  const [posts, setPosts] = useState([
    {
      username: "vibemane333",
      caption: "ayyy",
      imageUrl: "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg"
    },
    {
      username: "vibemane333",
      caption: "ayyy",
      imageUrl: "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg"
    }
  ]);


  return (
    <div className='app'>
      <div className='app__header'>
        <img
          className='app__headerImage'
          src='https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png'
          alt=""
        />
      </div>

      {
        posts.map(post => (
          <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
        ))
      }     

    </div>
  );
}

export default App;
