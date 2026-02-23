import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [hasil, setHasil] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const calculate = () => {
    try {
      setHasil(eval(input));
    } catch {
      setHasil("Error");
    }
  };

  const clear = () => {
    setInput("");
    setHasil("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-6 rounded-2xl shadow-2xl w-80">
        
        {/* Display */}
        <div className="bg-black text-white p-4 rounded-lg mb-4 text-right">
          <p className="text-gray-400 text-sm">{input}</p>
          <h2 className="text-2xl font-bold">{hasil}</h2>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-4 gap-3">
          <button onClick={clear} className="col-span-2 bg-red-500 hover:bg-red-600 p-3 rounded-lg">C</button>
          <button onClick={() => handleClick("/")} className="bg-yellow-500 p-3 rounded-lg">/</button>
          <button onClick={() => handleClick("*")} className="bg-yellow-500 p-3 rounded-lg">×</button>

          {[7,8,9].map(num => (
            <button key={num} onClick={() => handleClick(num)} className="bg-gray-700 hover:bg-gray-600 p-3 rounded-lg">{num}</button>
          ))}
          <button onClick={() => handleClick("-")} className="bg-yellow-500 p-3 rounded-lg">-</button>

          {[4,5,6].map(num => (
            <button key={num} onClick={() => handleClick(num)} className="bg-gray-700 hover:bg-gray-600 p-3 rounded-lg">{num}</button>
          ))}
          <button onClick={() => handleClick("+")} className="bg-yellow-500 p-3 rounded-lg">+</button>

          {[1,2,3].map(num => (
            <button key={num} onClick={() => handleClick(num)} className="bg-gray-700 hover:bg-gray-600 p-3 rounded-lg">{num}</button>
          ))}
          <button onClick={calculate} className="row-span-2 bg-green-500 hover:bg-green-600 p-3 rounded-lg">=</button>

          <button onClick={() => handleClick(0)} className="col-span-2 bg-gray-700 hover:bg-gray-600 p-3 rounded-lg">0</button>
          <button onClick={() => handleClick(".")} className="bg-gray-700 hover:bg-gray-600 p-3 rounded-lg">.</button>
        </div>
      </div>
    </div>
  );
}

export default App;