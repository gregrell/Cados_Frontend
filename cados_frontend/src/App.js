import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AdvocatePage from './pages/AdvocatePage'

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route element={<HomePage/>} path=""/>
      <Route element={<AdvocatePage/>} path="/advocate/:id"/>
        
      </Routes>
     
    </BrowserRouter>
  );
}

export default App;
