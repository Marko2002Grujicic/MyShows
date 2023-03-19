import 'materialize-css'
import Search from './Search/Search'
import Shows from './Shows/Shows'
const MainContent = ({shows, searchQuery, setSearchQuery}) => {
    return (
        <div className="container">
            <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
            <Shows shows={shows}/>
        </div>
    )
}
export default MainContent