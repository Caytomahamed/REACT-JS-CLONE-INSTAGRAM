import React from 'react';
import Post from './Post';
import './Posts.css';
import SearchBar from '../SearchBar/SearchBar';
const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { posts } = props;

  return (
    <div className='posts-container-wrapper'>
      {/* Map through the posts array returning a Post component at each iteration */}
      {/* Check the implementation of Post to see what props it requires! */}

       {
         
         posts.map((post) => {
           return(
             <div>
               <Post post={post}/>
             </div>
           ) 
         })

       }
    </div>
  );
};

export default Posts;
