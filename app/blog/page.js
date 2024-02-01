"use client"; // This is a client component 👈🏽
import Regex from '@/src/shared/Regex';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

function blog() {
    const [ispost, setpost] = useState([]);
  useEffect(() => {
    axios 
      .get("http://localhost:5000/blog")
      .then(function (response) {
        // handle success
        setpost(response.data);
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
    <div className="h-screen w-screen flex items-center flex-col">
    <div className="m-10  flex flex-col items-center">
    <div className="grid grid-cols-3 gap-4">
    {ispost.map((item, index) => (
    <div className="max-w-sm rounded overflow-hidden shadow-lg" key={index}>
  <img className="w-full" src="https://images.pexels.com/photos/3998365/pexels-photo-3998365.png" alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
    <Link href="/blog/[id]" as={`/blog/${item._id}`}>
    <div className="text-gray-700 text-base h-12 overflow-hidden">
    {Regex(item?.content)}
    </div>
    </Link>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
    <Link href="/blog/[id]" as={`/BlogEdit/${item._id}`}>
<button>Edit Blog</button>
    </Link>
  </div>
</div>
))}
    </div>
    </div>
    </div>
  )
}

export default blog