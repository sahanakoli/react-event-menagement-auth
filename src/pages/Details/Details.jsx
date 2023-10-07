import { useEffect, useState } from "react";
import Navbar from "../../sheard/Navbar/Navbar";
import { useLoaderData, useParams } from "react-router-dom";
import DetailCard from "./DetailCard";


const Details = () => {

    const [detail, setDetail] = useState({});

    const {id} = useParams();
    console.log(id)

    const details = useLoaderData();
    console.log(details)

    useEffect(() => {
        const findDetail = details?.find(detail => detail.id == id);

        setDetail(findDetail)
    } ,[id, details]);

    console.log(detail)
    return (
        <div>
            <Navbar></Navbar>
            <DetailCard detail={detail}></DetailCard>
        </div>
    );
};

export default Details;