import React, { Component } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Navbar from '../components/Navbar';

const Index = ({posts}) => {
  return (
    <div>
      <h1>Index</h1>
      <ul>
        {posts.map(post => (
        <li key={post.id}>
          <Link 
          href={`/post?id=${post.id}`} 
          as={`/post/${post.id}`}>{post.title}</Link>
        </li>
      ))}
      </ul>
    </div>
    );
  };

  export const getServerSideProps =  async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
    const {data} = res;
    return { props: { posts: data } };
  }

export default Index;