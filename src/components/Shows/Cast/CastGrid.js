import './CastGrid.css'

const CastGrid = ({cast}) => {

    const renderCast = (cast) => {
        if(!cast){
            return null;
        }
        const castSliced = cast.slice(0,6);
        console.log(cast)
        return(
            
            castSliced.map((member) => (
                <div className="col s12 m2">
                <div className="card cast">
                    <div class="card-image">
                        <img src={member.person.image.original} className="singlePageCast-image"/>
                        <h6 class="card-title singlePageCast-text">{member.person.name}</h6>
                    </div>
                </div>
                </div>
        )))};

    return (
        renderCast(cast)
    )
}
export default CastGrid;