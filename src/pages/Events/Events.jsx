import { useLoaderData } from "react-router-dom";
import EventCard from "../../component/EventCard/EventCard";
import Navbar from "../../sheard/Navbar/Navbar";



const Events = () => {
    const events = useLoaderData();
    console.log(events);
    return (
        <div className=" mt-10">
            <Navbar></Navbar>
           <h2 className=" text-3xl font-bold text-center mt-10">Events List</h2>
           <div className="grid lg:grid-cols-3 gap-5 mx-16">
                {
                    events?.map(event => <EventCard key={event.id} health={event}></EventCard>)
                }
            </div>
        </div>
    );
};

export default Events;