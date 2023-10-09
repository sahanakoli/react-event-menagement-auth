import { useLoaderData } from "react-router-dom";
import Banner from "../../sheard/Banner/Banner";
import Navbar from "../../sheard/Navbar/Navbar";
import Footer from "../../sheard/Footer/Footer";
import ServiceCard from "../../component/ServiceCard/ServiceCard";
import ExploreEvent from "../../component/ExploreEvent/ExploreEvent";


const Home = () => {

    const health = useLoaderData();
    console.log(health);
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <ExploreEvent></ExploreEvent>
            <h2 className=" text-3xl font-semibold text-center mt-16">Our Service</h2>
            <div className="grid lg:grid-cols-3 gap-5 mx-16">
                {
                    health?.map(service => <ServiceCard key={service.id} health={service}></ServiceCard>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;