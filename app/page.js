"use client"; // This is a client component 👈🏽

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import Head from 'next/head';
import axios from 'axios';

const QuillEditor = dynamic(() => import('react-quill'), { ssr: false });

export default function Home() {
  const [content, setContent] = useState('');
  const [message, setMessage] = useState('');

  const quillModules = {
    toolbar: [
      [{ header: '1' }, { header: '2' }, { font: [] }],
      [{ color: [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ align: [] }],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'image'],
      
      
      
      ['code-block'],
      ['clean'],
    ],
  };

  const quillFormats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'align',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    
    'color',
    'code-block',
  ];

  const handleEditorChange = (newContent) => {
    setContent(newContent);
  };

  
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post('http://localhost:5000/blog', { content });
    setMessage(res?.data?.message);
  } catch (err) {
    setMessage(err?.response?.data?.message);
  }
};

  return (
    <>
    <Head>
      <title>Quill Rich Text Editor on the Web application</title>
      <meta name='author' content='Soubhagyajit Borah'/>
    </Head>
    <main>
      <div className="h-screen w-screen flex items-center flex-col">
        <div className="m-10  flex flex-col items-center">
         <span className="text-2xl text-center">
          
        Quill Rich Text Editor on the Web
        </span> 
      
        </div>
        <form onSubmit={handleSubmit}>
        <div className="h-full w-[90vw]">
          <QuillEditor
            value={content}
            onChange={handleEditorChange}
            modules={quillModules}
            formats={quillFormats}
            theme="snow"
            className="w-full h-[70%] mt-10 bg-white"
            />
        </div>
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
      </div>
    </main>
    </>
  );
}