import React from "react";
import UserCard from "./UserCard";

function Exercise() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
          User Cards
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <UserCard name = "Muhammad" email = "Muhammad@example.com" street = "Jl. Semarang" city = "Semarang" />
          <UserCard name = "Hafizh" email = "hafizh@example.com" street = "Jl. Johar" city = "Semarang" />
          <UserCard name = "Raihan" email = "raihan@example.com" street = "Jl. Indrapasta" city = "Semarang" />
        </div>
      </div>
    </>
  );
}

export default Exercise;