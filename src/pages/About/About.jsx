import Navbar from "../../sheard/Navbar/Navbar";
import {AiOutlineArrowRight, AiOutlineMail} from 'react-icons/ai'
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
            <div className=" flex items-center mt-4">
            <AiOutlineArrowRight></AiOutlineArrowRight>
            <h3 className=" text-lg font-medium">Event Planning and Conceptualization</h3>
            </div>
            <div className=" flex items-center">
            <AiOutlineArrowRight></AiOutlineArrowRight>
            <h3 className=" text-lg font-medium">Venue Selection and Setup</h3>
            </div>
            <div className=" flex items-center">
            <AiOutlineArrowRight></AiOutlineArrowRight>
            <h3 className=" text-lg font-medium">Speaker and Workshop Coordination</h3>
            </div>
            <div className=" flex items-center">
            <AiOutlineArrowRight></AiOutlineArrowRight>
            <h3 className=" text-lg font-medium">Promotion and Marketing</h3>
            </div>
            <div className=" flex items-center">
            <AiOutlineArrowRight></AiOutlineArrowRight>
            <h3 className=" text-lg font-medium">Registration and Ticketing</h3>
            </div>
            <div className=" flex items-center">
            <AiOutlineArrowRight></AiOutlineArrowRight>
            <h3 className=" text-lg font-medium">Event Logistics and Coordination</h3>
            </div>
            <div className=" flex items-center">
            <AiOutlineArrowRight></AiOutlineArrowRight>
            <h3 className=" text-lg font-medium">Exhibitor and Sponsor Management</h3>
            </div>
            <div className=" flex items-center">
            <AiOutlineArrowRight></AiOutlineArrowRight>
            <h3 className=" text-lg font-medium">Health and Wellness Program Design</h3>
            </div>
            <div className=" flex items-center">
            <AiOutlineArrowRight></AiOutlineArrowRight>
            <h3 className=" text-lg font-medium">Catering and Dietary Planning</h3>
            </div>
            <div className=" flex items-center">
            <AiOutlineArrowRight></AiOutlineArrowRight>
            <h3 className=" text-lg font-medium">Audio-Visual and Technology Support</h3>
            </div>
          </div>
          <div className="mt-6 mx-20">
            <h2 className=" text-2xl font-bold">Why Choose Us</h2>
            <div className=" flex items-center mt-4">
            <AiOutlineArrowRight></AiOutlineArrowRight>
            <h3 className=" text-lg font-medium">Extensive Experience in Health and Wellness Events</h3>
            </div>
            <div className=" flex items-center">
            <AiOutlineArrowRight></AiOutlineArrowRight>
            <h3 className=" text-lg font-medium">Dedicated Team of Event Professionals</h3>
            </div>
            <div className=" flex items-center">
            <AiOutlineArrowRight></AiOutlineArrowRight>
            <h3 className=" text-lg font-medium">Creative and Innovative Event Concepts</h3>
            </div>
            <div className=" flex items-center">
            <AiOutlineArrowRight></AiOutlineArrowRight>
            <h3 className=" text-lg font-medium">Strong Industry Partnerships</h3>
            </div>
            <div className=" flex items-center">
            <AiOutlineArrowRight></AiOutlineArrowRight>
            <h3 className=" text-lg font-medium">Customized Solutions for Every Client</h3>
            </div>
            <div className=" flex items-center">
            <AiOutlineArrowRight></AiOutlineArrowRight>
            <h3 className=" text-lg font-medium">Proven Track Record of Successful Events</h3>
            </div>
            <div className=" flex items-center">
            <AiOutlineArrowRight></AiOutlineArrowRight>
            <h3 className=" text-lg font-medium">Commitment to Sustainability and Well-being</h3>
            </div>
          </div>
          <div className=" mt-6 mb-6 mx-20">
            <h3 className=" text-2xl font-semibold">Contact Info</h3>
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