import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPorfolio from './Pages/MainPortfolio/MainPortfolio';
import PageNotFound from './Pages/error404/PageNotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPorfolio/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </Router>
  )
}

export default App
