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
  const [layout, setLayout] = useState("grid");
  const [searchQuery, setSearchQuery] = useState("");

  const toggleLayout = () => {
    localStorage.setItem("layout", layout === "grid" ? "list" : "grid");
    setLayout(layout === "grid" ? "list" : "grid");
  };  

  useEffect(() => {
    setIsLoading(true);
    localStorage.setItem("layout", layout)
    fetch('https://api.tvmaze.com/shows')
    .then((res) => res.json())
    .then((data)=> {
      const slicedData = data.slice(0,50)
      setShows(slicedData);
      console.log(shows);
      setIsLoading(false);
    })
  }, [])

  useEffect(() => {
    const storedLayout = localStorage.getItem("layout");
    if (storedLayout) {
      setLayout(storedLayout);
    };
  }, []);

  useEffect((searchQuery) => {
    fetch(`https://api.tvmaze.com/search/shows?q=${searchQuery}`)
    .then((res) => res.json())
    .then((data) => {
      let slicedData = data.slice(0,10);
      console.log(slicedData);
      return slicedData
    })
  }, [searchQuery], shows)

  return (
    <div className="App">
      {isLoading && <LoadingAnimation/>}
      <Header></Header>
      <Routes>
        <Route path="/" element={<MainContent shows={shows} searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>}/>
        <Route path="/shows/:id" element={<SingleShowPage toggleLayout={toggleLayout} layout={layout} setLayout={setLayout}/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
