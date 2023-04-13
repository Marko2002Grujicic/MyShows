import React from 'react'
import 'materialize-css'
import Search from './Search/Search'
import Shows from './Shows/Shows'
import SearchedShows from './Search/SearchedShows'
import { NoShowFound } from './NoSearchResults/NoShowFound'
import { useEffect, useState } from 'react'
const MainContent = ({shows, searchQuery, setSearchQuery, setIsLoading}) => {
    const [searchShows, setSearchShows] = useState([])
    useEffect(() => {
        fetch(`https://api.tvmaze.com/search/shows?q=${searchQuery}`)
        .then(res => res.json())
        .then(data => setSearchShows(data))
    },[searchQuery])
    return (
        <div className="container">
            <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
            {searchQuery && searchShows.length === 0 && <NoShowFound/>}
            {searchQuery ? (<SearchedShows shows={searchShows} setSearchQuery={setSearchQuery} setIsLoading={setIsLoading} />) : (<Shows shows={shows} />) }
            
        </div>
    )
}
export default MainContent