/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


const DetailCard = ({detail}) => {

    const {id, image, name, description} = detail;

    return (
        <div>
           <div className=" flex justify-center mt-10">
           <div className="card w-6/12 bg-base-100 shadow-xl">
             <figure><img className=" w-full h-[220px]" src={image} alt="" /></figure>
            <div className="card-body">
              <h2 className="card-title text-2xl font-bold">{name}</h2>
              <p className="text-lg font-medium">{description}</p>
            <div className="card-actions justify-end">
            </div>
            </div>
        </div> 
        </div> 
        </div>
    );
};

export default DetailCard;