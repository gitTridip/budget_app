// rrd imports
import { Link, useLoaderData, useParams } from "react-router-dom";

// library imports
import { toast } from "react-toastify";


import { useEffect } from "react";


const Secure = () => {
    let { id } = useParams();

    useEffect(() => {
        if (id) {
            window.localStorage.setItem("userName", JSON.stringify(id));
        }
    
        window.location.href = "/";
    }, [id])
    
  return (
    <>
    </>
  );
};
export default Secure;
