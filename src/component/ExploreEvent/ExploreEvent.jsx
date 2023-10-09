

const ExploreEvent = () => {
    return (
        <div className="mt-16"> 
            <h2 className=" text-3xl font-semibold text-center mt-6">Explore Events Service</h2>
            <div data-aos="zoom-in-down" className="w-6/12 mx-auto grid grid-cols-2 lg:grid-cols-5 gap-8 mt-10">
           <div>
           <div className="avatar">
            <div className="w-36 rounded-full">
            <img src="https://i.ibb.co/74ycvTk/yoga-img.jpg" />
            </div>
            </div>
            <div><h2 className=" text-lg font-medium text-center pt-2">Yoga</h2></div>
            </div> 
           <div>
           <div className="avatar">
            <div className="w-36 rounded-full">
            <img src="https://i.ibb.co/YhT9wC5/nutrition.jpg" />
            </div>
            </div>
            <h2 className=" text-lg font-medium text-center pt-2">Nutrition</h2>
            </div> 
           <div>
           <div className="avatar">
            <div className="w-36 rounded-full">
            <img src="https://i.ibb.co/Jpj31bV/fitness.jpg" />
            </div>
            </div>
            <h2 className=" text-lg font-medium text-center pt-2">Fitness</h2>
            </div> 
           <div>
           <div className="avatar">
            <div className="w-36 rounded-full">
            <img src="https://i.ibb.co/RpXc4LV/mental.jpg" />
            </div>
            </div>
            <h2 className=" text-lg font-medium text-center pt-2">Mental</h2>
            </div> 
           <div>
           <div className="avatar">
            <div className="w-36 rounded-full">
            <img src="https://i.ibb.co/8XJSBWb/holistic.jpg" />
            </div>
            </div>
            <h2 className=" text-lg font-medium text-center pt-2">Holistic</h2>
            </div> 
        </div>
        </div>
    );
};

export default ExploreEvent;