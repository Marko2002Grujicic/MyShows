import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import MainContent from './components/MainContent';
import Header from './components/Header'
import Footer from './components/Footer'
import { LoadingAnimation } from './components/LoadingAnimation/LoadingAnimation';
import SingleShowPage from './components/Shows/SingleShowPage';
import About from './components/About/About';

function App() {
  const [shows, setShows] = useState([]);
  const [isLoading, setIsLoading] = useState([true]);
  const [searchQuery, setSearchQuery] = useState("");
  const [layout, setLayout] = useState(() => localStorage.getItem("layout") || "grid");

  useEffect(() => {
    setIsLoading(true);
    fetch('https://api.tvmaze.com/shows')
    .then((res) => res.json())
    .then((data)=> {
      const slicedData = data.slice(0,50)
      setShows(slicedData);
      setIsLoading(false);
    })
  }, [])

  useEffect(() => {
    localStorage.setItem("layout", layout)
  }, [layout]);


  return (
    <div className="App">
      {isLoading && <LoadingAnimation/>}
      <Header></Header>
      <Routes>
        <Route path="/" element={<MainContent shows={shows} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />}/>
        <Route path="/shows/:id" element={<SingleShowPage layout={layout} setLayout={setLayout} isLoading={isLoading} setIsLoading={setIsLoading}/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path='*' element={<MainContent shows={shows} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />}/>
      </Routes>
      <Footer/>
    </div>
  );
}
export default App;
