import 'materialize-css'
import Search from './Search/Search'
import Shows from './Shows/Shows'
import SearchedShows from './Search/SearchedShows'
import { NoShowFound } from './NoSearchResults/NoShowFound'
const MainContent = ({shows, searchQuery, setSearchQuery}) => {

    
    const filteredShows = shows.filter((show) => show.name.toLowerCase().includes(searchQuery.toLowerCase()))

    return (
        <div className="container">
            
            <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
            {!filteredShows.length && <NoShowFound/>}
            {searchQuery ? (<SearchedShows shows={filteredShows} setSearchQuery={setSearchQuery} />) : (<Shows shows={shows} />) }
            
        </div>
    )
}
export default MainContent