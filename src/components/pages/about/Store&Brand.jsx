import BreadCrumb from "../../common/BreadCrumb"
import Img from "../../../ui/Img"
import Btn from "../../../ui/Btn"
import Fbasket from '../../../assets/img/fbasket.png'
import Bigclock from '../../../assets/img/bigclock.png'

const StoreBrand = function(){

    return(
        <section className="my-31">
            <div className="container">
                <BreadCrumb text={`about`} roottext={`home`}></BreadCrumb>
                <div className="my-32 flex items-center gap-10">
                    <div className="relative">
                        <Img src={Bigclock} alt='pic'></Img>
                        <Btn text={'our brands'} className="absolute bottom-13 left-1/2 -translate-x-1/2 hover:bg-black hover:text-white"></Btn>
                    </div>
                    <div className="relative">
                        <Img src={Fbasket} alt='pic'></Img>
                        <Btn text={'our stores'} className="absolute bottom-13 left-1/2 -translate-x-1/2 hover:bg-black hover:text-white"></Btn>
                    </div>
                </div>
                <h3 className="text-black1 text-[39px] leading-13">Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.</h3>
            </div>
        </section>
    )
}

export default StoreBrand