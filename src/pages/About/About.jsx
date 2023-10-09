import Navbar from "../../sheard/Navbar/Navbar";
import { AiOutlineMail} from 'react-icons/ai'
import {CgWebsite} from 'react-icons/cg'


const About = () => {
    return (
        <div>
          <Navbar></Navbar>
          <div className="mt-10 mx-16">
          <h2 className=" text-3xl font-bold text-center">Health and Wellness Event Management Services</h2>
          <p className=" text-sm font-normal mt-4 text-center">At our event management company, we specialize in planning and executing health and wellness events that inspire and promote holistic well-being.<br/> Our experienced team is dedicated to creating memorable and impactful events that leave a lasting impression on attendees.</p>
          <div className="mt-16 mx-20">
            <h2 className=" text-2xl font-bold">Services Offered</h2>
            <div className=" mt-4">
            <h3 className=" text-lg font-medium">1.Event Planning and Conceptualization</h3>
            <h3 className=" text-lg font-medium">2.Venue Selection and Setup</h3>
            <h3 className=" text-lg font-medium">3.Speaker and Workshop Coordination</h3>
            <h3 className=" text-lg font-medium">4.Promotion and Marketing</h3>
            <h3 className=" text-lg font-medium">5.Registration and Ticketing</h3>
            <h3 className=" text-lg font-medium">6.Event Logistics and Coordination</h3>
            <h3 className=" text-lg font-medium">7.Exhibitor and Sponsor Management</h3>
            <h3 className=" text-lg font-medium">8.Health and Wellness Program Design</h3>
            <h3 className=" text-lg font-medium">9.Catering and Dietary Planning</h3>
            <h3 className=" text-lg font-medium">10.Audio-Visual and Technology Support</h3>
          </div>
          </div>
          
          <div className="mt-6 mx-20">
            <h2 className=" text-2xl font-bold">Why Choose Us</h2>
            <div className="mt-4">
            <h3 className=" text-lg font-medium">1.Extensive Experience in Health and Wellnes</h3>
            <h3 className=" text-lg font-medium">2.Dedicated Team of Event Professionals</h3>
            <h3 className=" text-lg font-medium">3.Creative and Innovative Event Concepts</h3>
            <h3 className=" text-lg font-medium">4.Strong Industry Partnerships</h3>
            <h3 className=" text-lg font-medium">5.Customized Solutions for Every Client</h3>
            <h3 className=" text-lg font-medium">6.Proven Track Record of Successful Events</h3>
            <h3 className=" text-lg font-medium">7.Commitment to Sustainability and Well-being</h3>
            </div>
          </div>
          <div className=" mt-6 mb-6 mx-20">
            <h3 className=" text-2xl font-bold">Contact Info</h3>
            <div className=" flex items-center">
              <AiOutlineMail></AiOutlineMail>
              <h3 className="text-lg font-medium ml-2 " >info@wellnesseventproducers.com</h3>
            </div>
            <div className=" flex items-center">
              <CgWebsite></CgWebsite>
              <h3 className="text-lg font-medium ml-2 ">https://www.wellnesseventproducers.com</h3>
            </div>
          </div>
          </div>
        </div>
    );
};

export default About;