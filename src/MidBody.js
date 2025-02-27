    import React from "react";
    import bgimg from "./assets/bgimg.jpeg";
    import { useNavigate } from "react-router-dom";
   
    import FoodCarousel from "./FoodCar";

    const MidBody = () => {
        const navigate=useNavigate();
        const handleonclick=()=>{
            navigate('/start')
        }
    return (
        <div
        className="min-h-screen min-w-full  top-1 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgimg})` }}
        >
        <div className="flex flex-col justify-center items-center h-screen">
            <div className="tangerine-bold text-[#cba261] text-8xl ">
            Welcome
            </div>
            <div className="text-4xl text-[#1C1572] mb-4">AWSM FOODZ</div>
            <div className="w-16 h-1 bg-white rounded-full mb-2"></div>
            
            <div>
            <button type="button" onClick={handleonclick} class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-[#1C1572] focus:z-10 focus:ring-4 focus:ring-gray-100">Explore</button>
            </div>
            
        </div>
        
        </div>
       
       
    );
    };

    export default MidBody;
