import BreadCrumb2 from "../../common/BreadCrumb2"
import Img from "../../../ui/Img"
import Lamps from '../../../assets/img/lamps.png'

const Shelf = function(){

    return(
        <section className="mb-10">
            <div className="container">
                <div className="flex items-center gap-12.5">
                    <div>
                        <Img src={Lamps} alt='lamps'></Img>
                    </div>
                    <div className="flex flex-col items-start gap-8">
                        <div>aprt 2</div>
                        <div>aprt 3</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Shelf