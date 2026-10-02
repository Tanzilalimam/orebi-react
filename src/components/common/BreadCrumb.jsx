import { FaAngleRight } from "react-icons/fa6";

const BreadCrumb = function({className, text, roottext}){

    return(
    <div className="flex flex-col gap-5">
                <h1 className={`${className} text-5xl text-black1 font-bold capitalize`}>{text}</h1>
                <div className="flex items-center gap-2">
                    <div className={`${className} text-grey2 capitalize`}>{roottext}</div>
                    <FaAngleRight className="text-grey2"/>
                    <div className={`${className} text-grey2 capitalize`}>{text}</div>
                </div>
            </div>
    )
}

export default BreadCrumb