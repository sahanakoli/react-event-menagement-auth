/* eslint-disable react/prop-types */
import { FiCalendar } from 'react-icons/fi'


const BlogCard = ({blogs}) => {
    const {image, title, details, date} = blogs;
    return (
        <div>
            <div className=" flex justify-center mt-10">
           <div className="card w-96 bg-base-100 shadow-xl mt-8">
             <figure><img className=" w-full h-[220px]" src={image} alt="" /></figure>
            <div className="card-body">
              <h2 className="card-title text-2xl font-bold">{title}</h2>
              <p className='mb-4'>{details}</p>
              <hr/>
            <div className=' flex justify-end items-center mt-4'>
            <FiCalendar className=' mr-2'></FiCalendar>
            <p className=" text-base font-semibold">{date}</p>
            </div>
            </div>
        </div> 
        </div>
        </div>
    );
};

export default BlogCard;