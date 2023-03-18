import 'materialize-css'
import Shows from './Shows/Shows'
const MainContent = ({shows}) => {
    return (
        <div className="container">
            <Shows shows={shows}/>
        </div>
    )
}
export default MainContent