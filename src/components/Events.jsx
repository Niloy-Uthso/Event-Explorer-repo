import React from 'react';
import Event from './Event';
 

const Events = ({data}) => {
    return (
        <div className='flex flex-col p-4 items-center mt-10 gap-10'>
            <h1 className='text-4xl font-bold'>Upcoming Events</h1>
            <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8'>
                {
                    data.map(event=>(
                        <Event key={event.id} event={event}></Event>
                    ))
                }
            </div>
        </div>

    );
};

export default Events;