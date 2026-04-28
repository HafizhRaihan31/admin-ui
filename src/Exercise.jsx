import React, { useEffect, useState } from "react";
//import UserCard from "./UserCard";
//import {getUsers} from "./Services"; 
import PostCard from "./PostCard";
import { postsData } from "./postsData";

function Exercise() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
        Post Cards
      </h1>

      <div className="  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-8xl mx-auto">
        {postsData.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
}

export default Exercise;