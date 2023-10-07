/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const ServiceCard = ({health}) => {

    const {id, name, image, details} = health;
    return (
        <div className=" flex justify-center mt-10">
           <div className="card w-96 bg-base-100 shadow-xl">
             <figure><img className=" w-full h-[220px]" src={image} alt="" /></figure>
            <div className="card-body">
              <h2 className="card-title text-2xl font-bold">{name}</h2>
              {
                 details.length > 60 ?
                 <p>{details.slice(0, 60)}.....</p>
                 :
                 <p>{details}</p>
              }
            <div className="card-actions justify-end">
               <Link to={`/health/${id}`}>
               <button className="btn bg-red-200">details</button>
               </Link>
            </div>
            </div>
        </div> 
        </div>
    );
};

export default ServiceCard;