const Shows = ({shows}) =>{
    console.log(shows);
    return (
        <>
        <div className="row">
            
        {shows.map(show => (
            <div className="col s4">
                <div className="card">
                    <div className="card-image">
                        <img src={show.image.medium}/>
                        <a className="btn-floating halfway-fab waves-effect waves-light blue"><i class="material-icons">{show.rating.average}</i></a>
                    </div>
                    <div className="card-content">
                    <p class="card-title">{show.name}</p>
                    </div>
                </div>
            </div>
        ))}
            
        </div>
        </>
    )
}
export default Shows