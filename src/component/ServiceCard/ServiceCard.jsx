/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const ServiceCard = ({health}) => {
    const {id, name, image, price, description} = health;
    return (
        <div data-aos="zoom-in-up"  className=" flex justify-center mt-10">
           <div className="card w-96 bg-base-100 shadow-xl">
             <figure><img className=" w-full h-[220px]" src={image} alt="" /></figure>
            <div className="card-body">
              <h2 className="card-title text-2xl font-bold">{name}</h2>
              <p className=" text-lg font-semibold">Price: ${price}</p>
              {
                 description.length > 100 ?
                 <p className=" text-base font-normal">{description.slice(0, 100)}.....</p>
                 :
                 <p>{description}</p>
              }
            <div className="card-actions justify-end">
               <Link to={`/health/${id}`}>
               <button className="btn bg-blue-200 ">details</button>
               </Link>
            </div>
            </div>
        </div> 
        </div>
    );
};

export default ServiceCard;