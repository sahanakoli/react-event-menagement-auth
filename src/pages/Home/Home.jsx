import { useLoaderData } from "react-router-dom";
import Banner from "../../sheard/Banner/Banner";
import Navbar from "../../sheard/Navbar/Navbar";
import ServiceCard from "../../sheard/ServiceCard/ServiceCard";
import Footer from "../../sheard/Footer/Footer";


const Home = () => {

    const health = useLoaderData();
    console.log(health);
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <h2 className=" text-3xl font-semibold text-center mt-10">Our Service</h2>
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