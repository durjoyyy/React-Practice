import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numbers, setNumbers] = useState(true);
  const [chars, setChars] = useState(false);
  const [pass, setPass] = useState("Durjoy");


  useEffect(()=>{
    let pass = "";
    let validPass = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numbers) validPass += "0123456789";
    if (chars) validPass += "!@#_$%";

    for (let i = 0; i < length; i++) {
      let idx = Math.floor(Math.random() * validPass.length);
      pass += validPass[idx];
    }

    setPass(pass);
  },[length, numbers, chars]);

  //   const handleCopy = () => {
  //   navigator.clipboard.writeText(pass);
  // };

const handleCopy = () => {
  if (passRef.current) {
    passRef.current.select();
    passRef.current.setSelectionRange(0,10);
    navigator.clipboard.writeText(passRef.current.value);
  }
};


  let passRef=useRef(null);

  return (
    <>
      <h1 className="text-4xl text-center mb-5 text-white">
        Password Generator
      </h1>

      <div className="w-full max-w-md mx-auto shadow-xl rounded-2xl px-4 py-8 bg-gray-700 text-white">
        {/* Password field and copy button */}
        <div className="flex items-center shadow rounded-lg overflow-hidden mb-6 bg-white text-black">
          <input
            type="text"
            value={pass}
            className="outline-none w-full py-2 px-3 text-lg"
            readOnly
            ref={passRef}
          />
          <button className="bg-blue-600 mr-0.5hover:bg-blue-700 hover:bg-blue-700 rounded-2xl text-white px-4 py-2 transition-all cursor-pointer"  onClick={handleCopy}>
            Copy
          </button>
        </div>

        {/* Length slider */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">
            Password Length:{" "}
            <span className="inline-block bg-gray-600 px-2 py-0.5 rounded text-white">
              {length}
            </span>
          </label>
          <input
            type="range"
            min="6"
            max="20"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full"
          />
        </div>

        {/* Checkboxes */}
        <div className="flex items-center mb-4 space-x-4">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              defaultChecked={numbers}
              onChange={(e) => setNumbers(e.target.checked)}
            />
            <span>Include Numbers</span>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              defaultChecked={chars}
              onChange={(e) => setChars(e.target.checked)}
            />
            <span>Include Characters</span>
          </label>
        </div>
      </div>
    </>
  );
}

export default App;
