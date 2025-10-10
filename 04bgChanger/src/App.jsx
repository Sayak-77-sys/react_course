import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [bgColor, setBgColor] = useState("bg-white");
  return (
    <div
      className={`w-screen h-screen flex items-center justify-center ${bgColor} transition-colors duration-500`}
    >
      <div className="flex gap-6">
        <button
          onClick={() => setBgColor("bg-red-500")}
          className="px-6 py-3 bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-600 transition"
        >
          Red
        </button>

        <button
          onClick={() => setBgColor("bg-blue-500")}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition"
        >
          Blue
        </button>

        <button
          onClick={() => setBgColor("bg-green-500")}
          className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 transition"
        >
          Green
        </button>
      </div>
    </div>
  );
}

export default App
