
function MovieModal (props) {
    

    return (
        <div>
            <div id= "MovieModalcontainer" className="MovieModalcontainer">
                <button className="closeModal" onClick={props.closeModal}>X</button>
                <img className='Modalpic' src= {props.img} alt='' />
                {/* <p  className='mmovietitle'> {props.title}</p> */}
                {/* <p className='mmovieyear'>{props.year}</p> */}
                {/* <p className= 'mmoviegenre'>{props.genre}</p> */}
                    
                
                <p className='moviedescription'>{props.description}</p> 
                
            </div>
            

        </div>



    )
}

export default MovieModal;