import './CastGrid.css'

const CastGrid = ({cast}) => {

    const renderCast = (cast) => {
        if(!cast){
            return null;
        }
        const castSliced = cast.slice(0,6);
        return(
            
            castSliced.map((member) => (
                
                <div className="col s6 m3 l2">
                <div className="card cast">
                    <div className="card-image">
                        <img alt="cast" src={member.person.image.original} className="singlePageCast-image"/>
                        <h6 className="card-title singlePageCast-text">{member.person.name}</h6>
                    </div>
                </div>
                </div>
        )))};

    return (
        renderCast(cast)
    )
}
export default CastGrid;