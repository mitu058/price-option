import { IoIosCheckmarkCircle } from "react-icons/io";

const Feature = ({feature}) => {
    return (
        <div>
           <p className="flex items-center"><IoIosCheckmarkCircle className="mr-2"></IoIosCheckmarkCircle> 
           {feature}</p> 
          
        </div>
    );
};

export default Feature;