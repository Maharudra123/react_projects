import { useState, useCallback, useEffect } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numAllow, setNumAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");

  // Function to generate a password
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllow) str += "0123456789";
    if (charAllow) str += "!@#$%^&*_-{}[]~`";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numAllow, charAllow]);

  // Automatically generate a password when dependencies change
  useEffect(() => {
    passwordGenerator();
  }, [length, numAllow, charAllow, passwordGenerator]);

  // Function to copy password to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert("Password copied to clipboard!");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-800">
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-6 text-orange-500 bg-gray-700">
        <h1 className="text-center text-xl font-bold text-white mb-4">
          Password Generator
        </h1>

        {/* Password Display */}
        <div className="flex items-center justify-between bg-white rounded-lg px-3 py-2 mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full text-black"
            placeholder="Generated Password"
            readOnly
          />
          <button
            onClick={copyToClipboard}
            className="bg-orange-500 px-4 py-1 text-white rounded-md ml-2"
          >
            Copy
          </button>
        </div>

        {/* Length Selection */}
        <div className="mb-3 text-white">
          <label>Password Length: {length}</label>
          <input
            type="range"
            min="6"
            max="20"
            value={length}
            onChange={(e) => setLength(parseInt(e.target.value))}
            className="w-full"
          />
        </div>

        {/* Checkboxes */}
        <div className="flex justify-between text-white">
          <label>
            <input
              type="checkbox"
              checked={numAllow}
              onChange={() => setNumAllow(!numAllow)}
            />{" "}
            Include Numbers
          </label>
          <label>
            <input
              type="checkbox"
              checked={charAllow}
              onChange={() => setCharAllow(!charAllow)}
            />{" "}
            Include Symbols
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
