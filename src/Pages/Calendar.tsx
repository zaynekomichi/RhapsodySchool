import { useState } from 'react';
import logo from '../assets/logo.webp';
import { data } from '../components/test';

const Calendar = ()=>{
   
    return(
        <div>
            <h1 className="text-center m-1">School Calendar</h1>
            <div className='container'>
                {
                    data.map((items)=>{
                        return(

                           <div className="row m-3 rounded  d-flex align-items-center bg-dark text-white p-1">
                               <div className="col-sm  d-flex justify-content-center">
                                   <p className='fs-1'>{items.emoji}</p>
                               </div>
                               <div className="col-sm">
                                <h1>{items.event}</h1>  
                               </div>
                               <div className="col-sm">
                                <p>{items.date}</p>
                               </div>
                               <div className="col">
                                   <p>
                                    {items.description}
                                   </p>
                                   
                               </div>
                           </div> 

                        )
                    })
                }

            </div>
            
        </div>
    );
}

export default Calendar;