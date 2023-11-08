import './App.css';
import Login from './pages/login';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Planet from './pages/planet';

function App() {
  return (
    <div className="container">
      <h1>Star Wars</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/planet" element={<Planet />} />
        </Routes>
      </BrowserRouter>
      {/* <Login /> */}
    </div>
  );
}

export default App;
