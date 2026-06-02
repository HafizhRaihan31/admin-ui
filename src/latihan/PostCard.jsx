import React, { useState } from "react";

function PostCard({ id, userId, title, body }) {
  const [clicked, setClicked] = useState(false);

  return (
    <div
      className="
        flex flex-col justify-between
        bg-white p-6 rounded-lg shadow
        transition-all duration-300
        hover:scale-105 hover:border hover:border-gray-400 hover:bg-red-50
      "
    >

      <h2 className="text-lg font-bold text-center mb-2">
        {title}
      </h2>

      <p className="text-gray-600 text-center flex-1">
        {body}
      </p>

      <button
        onClick={() => setClicked(true)}
        className={`
          mt-4 p-2 rounded-md text-white transition-all
          ${clicked ? "bg-special-red2" : "bg-gray-01"}
          hover:brightness-145
        `}
      >
        {clicked ? "Tombol sudah diklik" : "Silakan Klik"}
      </button>
    </div>
  );
}

export default PostCard;