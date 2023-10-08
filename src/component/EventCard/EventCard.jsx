/* eslint-disable react/prop-types */
import { BiTime } from 'react-icons/bi'
import { FiCalendar } from 'react-icons/fi'


const EventCard = ({health}) => {

    const { name, image, description, time, date} = health;

    return (
        <div className=" flex justify-center mt-10">
           <div className="card w-96 bg-base-100 shadow-xl">
             <figure><img className=" w-full h-[220px]" src={image} alt="" /></figure>
            <div className="card-body">
              <h2 className="card-title text-2xl font-bold">{name}</h2>
              {
                 description.length > 100 ?
                 <p className=" text-base font-normal">{description.slice(0, 108)}</p>
                 :
                 <p>{description}</p>
              }
            <div className=' flex justify-center items-center'>
            <BiTime className=' mr-2'></BiTime>
            <p className=" text-base font-semibold">{time}</p>
            </div>
            <div className=' flex justify-center items-center'>
            <FiCalendar className=' mr-2'></FiCalendar>
            <p className=" text-base font-semibold">{date}</p>
            </div>
            </div>
        </div> 
        </div>
    );
};

export default EventCard;