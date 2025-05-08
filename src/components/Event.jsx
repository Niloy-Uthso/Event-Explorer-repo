import React from 'react';
import { NavLink } from 'react-router';

const Event = ({event}) => {
    
    return (
        <div>
            <div className="card bg-base-100 w-80 md:w-96 h-[100%] shadow-sm">
  <figure>
    <img className='w-full h-full'
      src= {event.thumbnail}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
       {event.name}
      <div className="badge badge-secondary">{event.category}</div>
    </h2>
    <p>{event.description}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{event.date}</div>
       
      <NavLink  className="badge badge-outline text-pink-600 hover:bg-pink-200 cursor-pointer" 
 to={`/${event.id}`}>View More!!</NavLink>
    </div>
  </div>
</div>
        </div>
    );
};

export default Event;