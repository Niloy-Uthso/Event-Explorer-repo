import React, { useContext } from 'react';
import { Navigate, useLoaderData, useNavigate, useParams } from 'react-router';
import { valueContext } from '../Rootlayout';

const Eventdetails = () => {
    const {currentUser}=useContext(valueContext)
    
    console.log(currentUser)
    const { id } = useParams();
    const events=useLoaderData()
    if(!currentUser||!currentUser.email){
        console.log('nai')
        return <Navigate to={'/login'}></Navigate>
    }
    
    const handlesubmit=()=>{
        alert("success")
    }
    

    const event = events.find(item => item.id === id);
     
     
    return (
        <div className=''>
            <div className="card mx-auto mt-10 bg-base-100 w-[50%] h-[100%] shadow-sm">
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
       
      <div  className="badge badge-outline text-pink-600 hover:bg-pink-200 cursor-pointer">Entry fee:{event.entry_fee}</div>
   
    </div>
    <div> <span className='font-bold text-2xl text-red-600'>Location:</span><span className='text-yellow-400 font-semibold text-xl'>{event.location}</span></div>
  </div>

  <h1 className='mx-auto text-3xl font-bold'>Want to participate??Fill up the form below:</h1>
  <form onSubmit={handlesubmit} class=" bg-base-200 border-base-300 mx-auto mt-5 rounded-box w-xs border p-4">
   

   <label class="label">Name</label>
   <input required  type="text" class="input" name='name' placeholder="Enter name" />
 
   <label class="label">Email</label>
   <input required type="text" class="input" name='email' placeholder="Enter email" />
 
  <div className='flex justify-between items-center  gap-3'>
  <button type='submit' class="btn btn-neutral mt-4">Reserve Seat</button>
  
  </div>
 </form>
</div>
        </div>
    );
};

export default Eventdetails;