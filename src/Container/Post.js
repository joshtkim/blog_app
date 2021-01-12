import React from 'react';
import BlogPost from '../Components/BlogPost.js';
import Blogs from '../Container/Blogs.js';

const Post = (props) => {

    console.log(props, "Post");
    console.log(Blogs)

  return(
        <div>
          <BlogPost {...props} />
        </div>
   )

 }

export default Post;