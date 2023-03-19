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
  return (
    <div className="App">
      {isLoading && <LoadingAnimation/>}
      <Header></Header>
      <Routes>
        <Route path="/" element={<MainContent shows={shows}/>}/>
        <Route path="/shows/:id" element={<SingleShowPage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
