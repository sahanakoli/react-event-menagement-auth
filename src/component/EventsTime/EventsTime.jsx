

const EventsTime = () => {
    return (
        <div className="w-6/12 mx-auto grid grid-cols-2 lg:grid-cols-5 gap-8 mt-10">
           <div>
           <div className="card w-96 bg-primary text-primary-content">
            <div className="card-body">
             <h2 className="card-title text-2xl font-bold">Today</h2>
            </div>
            </div>
        </div> 
           <div>
           <div className="card w-96 bg-primary text-primary-content">
            <div className="card-body">
             <h2 className="card-title text-2xl font-bold">Tomorrow</h2>
            </div>
            </div>
        </div> 
           <div>
           <div className="card w-96 bg-primary text-primary-content">
            <div className="card-body">
             <h2 className="card-title text-2xl font-bold">This week</h2>
            </div>
            </div>
        </div> 
           <div>
           <div className="card w-96 bg-primary text-primary-content">
            <div className="card-body">
             <h2 className="card-title text-2xl font-bold">Today</h2>
            </div>
            </div>
        </div> 
           
        </div>
    );
};

export default EventsTime;