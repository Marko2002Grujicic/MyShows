import './CastList.css'
const CastList = ({cast}) => {

    const renderCast = (cast) => {
        if(!cast){
            return null;
        }
        const castSliced = cast.slice(0,8);
        return(
            <div className='row'>
                {castSliced.map((member) => (
               <>
               <div className='container col m6 s12 noPadding'>
               <div className="card cast">
                <div className='centered'>
                        <img alt="cast" src={member.person.image.original} className="singlePageCast-image-list"/>
                       <h2 className="card-title singlePageCast-text"><b>{member.person.name}</b></h2>
                </div>
                       
                
                       
                   </div>
                   </div>

               </>
               
        
               
               
       ))}
            </div>
            )};

    return (
        renderCast(cast)
    )
}
export default CastList