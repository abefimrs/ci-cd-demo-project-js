import logo from "./logo.svg";
import "./App.css";
import React from "react";

function App() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setTime((t) => t + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         We are watching github action [ Jan 11 2025 ]
         <br />
          Time: {time}s
        </p>        
      </header>
    </div>
  );
}

export default App;
