import './CastList.css'
const CastList = ({cast}) => {

    const renderCast = (cast) => {
        if(!cast){
            return null;
        }
        const castSliced = cast.slice(0,8);
        return(
            
            castSliced.map((member) => (
                <>
                <div className='row'>
                <div className='container'>
                <div className="card cast">
                        <div className='col l2 m2 s6'>
                        <img alt="cast" src={member.person.image.original} className="singlePageCast-image-list"/>
                        </div>
                        <div className='col s3'>
                        <h2 className="card-title singlePageCast-text"><b>{member.person.name}</b></h2>
                        </div>
                        
                    </div>
                    </div>
                </div>
                <div className='divider'></div>
                </>
        )))};

    return (
        renderCast(cast)
    )
}
export default CastList