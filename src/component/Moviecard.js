
import Backdrop from "./Backdrop";
import MovieModal from "./MovieModal";
import React, {useState} from "react";




function Moviecard (props) {
    let [modal, setModal] = useState (false);

    function showDetailsHandler () {
        setModal (true);
    }

    function hideDetailsHandler () {
        setModal (false);
    }

    return (
        <div>

           <div className='moviecardcontainer'> 
                <img className='moviecardimage' onClick = {showDetailsHandler} src= {props.img} alt='mm'/>
                {/* <p  className='movietitle'> {props.title}</p> */}
                <p className='movieyear'>{props.year}</p>
                {/* <p className='moviedescription'>{props.desc}</p>     */}
                {/* <p className= 'moviegenre'>{props.genre}</p>  */}
                
           </div>

           
                {modal ? <MovieModal title={props.title} img={props.img} year={props.year} genre={props.genre} description={props.desc} closeModal={hideDetailsHandler} />: null }
                
                

                {modal ? <Backdrop onClick={hideDetailsHandler}/>: null }
            
                

            
        </div>
    )
}

export default Moviecard;