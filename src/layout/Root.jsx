import { Outlet } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from "react";


const Root = () => {

    useEffect(() =>{
        AOS.init();
    }, [])
    return (
        <div>
           <Outlet></Outlet> 
        </div>
    );
};

export default Root;