import React from "react";

function Card({
  title = "Sample Card",
  content = "This is a sample card content",
  buttonText = "Click Me",
}) {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
        <p className="text-gray-600 mb-4">{content}</p>
        <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200">
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default Card;
