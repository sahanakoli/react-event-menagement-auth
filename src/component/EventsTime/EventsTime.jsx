

const EventsTime = () => {
    return (
        <div className="w-8/12 mx-auto mt-16">
            <h2 className=" text-3xl font-bold text-center">Health events time options</h2>
            <div data-aos="zoom-in-down" className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 ">
           <div className=" w-60 h-20 rounded-lg bg-blue-100">
             <h2 className=" text-3xl font-bold text-center py-6">Today</h2>
        </div> 
           <div className=" w-60 rounded-lg h-20 bg-blue-100">
             <h2 className=" text-3xl font-bold text-center py-6">Tomorrow</h2>
        </div> 
           <div className=" w-60 rounded-lg h-20 bg-blue-100">
             <h2 className=" text-3xl font-bold text-center py-6">This week</h2>
        </div> 
           <div className=" w-60 rounded-lg h-20 bg-blue-100">
             <h2 className=" text-3xl font-bold text-center py-6">Next Week</h2>
        </div> 
           <div className=" w-60 rounded-lg h-20 bg-blue-100">
             <h2 className=" text-3xl font-bold text-center py-6">This Month</h2>
        </div> 
           <div className=" w-60 rounded-lg h-20 bg-blue-100">
             <h2 className=" text-3xl font-bold text-center py-6">Next Month</h2>
        </div> 
           
        </div>
        </div>
    );
};

export default EventsTime;