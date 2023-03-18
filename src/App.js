import { useEffect, useState } from 'react';
import './App.css';
import MainContent from './components/MainContent';
import Header from './components/Header'
import Footer from './components/Footer'
import { LoadingAnimation } from './components/LoadingAnimation/LoadingAnimation';
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
      <Header/>
      <MainContent shows={shows}/>
      <Footer/>
    </div>
  );
}

export default App;
