import { useState } from "react";
import { IoIosStar } from "react-icons/io";

const Star = function(){

let [rating, setRating] = useState(null);

function click(index){
    if(rating === index){
        setRating(null);
    }
    else{
        setRating(index);
    }
}
    return(
        <>
            <div className="flex items-center gap-1">
                {
                [0,1,2,3,4].map(function(index){
                    let isHighlighted = rating !== null && index <= rating;
                    return(
                        <IoIosStar key={index} className={`text-2xl trans cursor-pointer ${isHighlighted ? "fill-amber-500" : "fill-gray-500"}`} onClick={()=> click(index)}/>
                    )
                })
                }
            </div>
        </>
    )
}

export default Star