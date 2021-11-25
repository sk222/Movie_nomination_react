import React from 'react';
import MovieItem from "../Movie/MovieItem";
import './NominationList.css';

const NominationList = (props)=>{
   const nominatedList = props.nominatedList;
    return  (
    <React.Fragment> 
     <ul> 
           
           { 
            nominatedList.length===0 ?<p>No Data</p>:   nominatedList.map((nominations)=>{
            return <div key={nominations.id+'_n'}>
             <MovieItem id={nominations.id}
            image={nominations.image} title={nominations.title} year={nominations.year}
            />
            <button className="button" id={nominations.id} onClick={props.removeNominationHandler}> Remove </button>
            </div>
           })}
     </ul>
    </React.Fragment>
    )
}
export default NominationList;