import { useState } from "react";

function App() {
  const [color, setColor] = useState("bg-gray-300");

  return (
    <div className={`w-full h-screen duration-200 ${color}`}>
      <div className="fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
          <button
            onClick={() => setColor("bg-red-500")}
            className="px-4 py-1 rounded-full text-white shadow-2xl bg-red-500"
          >
            Red
          </button>
          <button
            onClick={() => setColor("bg-green-500")}
            className="px-4 py-1 rounded-full text-white shadow-2xl bg-green-500"
          >
            Green
          </button>
          <button
            onClick={() => setColor("bg-blue-500")}
            className="px-4 py-1 rounded-full text-white shadow-2xl bg-blue-500"
          >
            Blue
          </button>
          <button
            onClick={() => setColor("bg-yellow-400")}
            className="px-4 py-1 rounded-full text-gray-800 shadow-2xl bg-yellow-400"
          >
            Yellow
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
