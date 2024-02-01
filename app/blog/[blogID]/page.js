"use client"; // This is a client component 👈🏽

import React,{useState,useEffect} from 'react'
import axios from 'axios';

function BlogDetails({params}) {
  const [getPost,setPost] = useState([]);

  useEffect(() => {
    axios 
      .get(`https://inochiglobal.onrender.com/blog/${params.blogID}`)
      .then(function (response) {
        setPost(response.data)
         console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);

  return (
    <>
    <div className="h-screen w-screen flex items-center flex-col">
    <div className="m-10  flex flex-col items-center">
      <h1>this is a product details page</h1>
      <p>this blog Id {params.blogID}</p>
      <div dangerouslySetInnerHTML={{ __html: getPost.content }}/>
    </div>
    </div>
    </>
  )
}

export default BlogDetails
