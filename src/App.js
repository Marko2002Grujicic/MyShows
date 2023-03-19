import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import MainContent from './components/MainContent';
import Header from './components/Header'
import Footer from './components/Footer'
import { LoadingAnimation } from './components/LoadingAnimation/LoadingAnimation';
import SingleShowPage from './components/Shows/SingleShowPage';

function App() {
  const [shows, setShows] = useState([]);
  const [isLoading, setIsLoading] = useState([true]);
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);
  const [layout, setLayout] = useState(() => localStorage.getItem("layout") || "grid");

  useEffect(() => {
    setIsLoading(true);
    fetch('https://api.tvmaze.com/shows')
    .then((res) => res.json())
    .then((data)=> {
      const slicedData = data.slice(0,50)
      setShows(slicedData);
      console.log(shows);
      setIsLoading(false);
    })
  }, [])

  useEffect((searchQuery) => {
    fetch(`https://api.tvmaze.com/search/shows?q=${searchQuery}`)
    .then((res) => res.json())
    .then((data) => {
      const slicedData = data.slice(0,10)
      setResults(slicedData)
    })
  }, [searchQuery])

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
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
