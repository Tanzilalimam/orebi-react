import { NavLink } from "react-router-dom"
import Btn from "../../../ui/Btn"
import Img from "../../../ui/Img"
import Wallclock from '../../../assets/img/wallclock.png'

const Banner2 = function(){

    return(
        <section className="my-15">
            <div className="container">
                <div className="flex items-center gap-0">
                    <Img src={Wallclock} alt='banner2'></Img>
        <div className={`px-32 py-23 bg-white1 flex flex-col items-start gap-7.5`}>
            <h1 className={`text-black1 text-5xl font-bold capitalize`}>product of the year</h1>
            <div className={`text-grey3`}>lorem ipsum is simply dummy text of the printing and typesetting</div>
            <NavLink to={'/product'}>
            <Btn className="hover:bg-black hover:text-white" text={'shop now'}></Btn>
            </NavLink>
        </div>
                </div>
            </div>
        </section>
    )
}

export default Banner2