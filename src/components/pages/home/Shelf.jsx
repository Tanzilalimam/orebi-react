import BreadCrumb2 from "../../common/BreadCrumb2"
import Img from "../../../ui/Img"
import Lamps from '../../../assets/img/lamps.png'
import Watch from '../../../assets/img/watch.png'
import Lamp from '../../../assets/img/lamp.png'

const Shelf = function(){

    return(
        <section className="my-32">
            <div className="container">
                <div className="flex items-center gap-12.5">
                    <div className="relative">
                        <Img src={Lamps} alt='lamps'></Img>
                        <div className="absolute bottom-14 left-16.75">
                        <BreadCrumb2 title={'phones sale'} span1={'up to'} span2={'30%'} text={'sale for all phones!'}></BreadCrumb2>
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-8">
                        <div className="relative">
                        <Img src={Watch} alt='watch'></Img>
                        <div className="absolute bottom-14 left-7">
                        <BreadCrumb2 title={'electronics sale'} span1={'up to'} span2={'70%'} text={'sale for all electronics!'}></BreadCrumb2>
                        </div>
                    </div>
                        <div className="relative">
                        <Img src={Lamp} alt='lamp'></Img>
                        <div className="absolute bottom-14 left-7">
                        <BreadCrumb2 title={'furniture offer'} span1={'up to'} span2={'50%'} text={'sale for all furnitures!'}></BreadCrumb2>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Shelf