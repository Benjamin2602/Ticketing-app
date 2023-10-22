import React from "react";

const page = ({ params }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>
        <span className="text-4xl font-bold">Ticket</span>
        <span className="text-4xl font-bold text-blue-500">Post</span>
      </h1>
      <br/>
      <p className="text-xl text-gray-500 ml-2">
        The ticket post id <span className="text-xl text-black bg-orange-500 rounded ml-2 p-2 ">{params.id}</span>
      </p>
    </div>
  );
};

export default page;
