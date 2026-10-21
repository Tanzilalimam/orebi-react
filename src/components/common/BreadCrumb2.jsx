import { NavLink } from "react-router-dom"
import Btn from "../../ui/Btn"

const BreadCrumb2 = function({title, span1, span2,  text, className}){

    return(
        <div className={`${className} flex flex-col items-start gap-7.5`}>
            <h1 className={`${className} text-black1 text-5xl font-bold capitalize`}>{title}</h1>
            <div className={`${className} text-grey3`}> {span1} <span className={`${ className} text-black1 text-[40px] font-bold`}> {span2} </span> {text}
            </div>
            <NavLink to={'/product'}>
            <Btn className="hover:bg-black hover:text-white" text={'shop now'}></Btn>
            </NavLink>
        </div>
    )
}

export default BreadCrumb2