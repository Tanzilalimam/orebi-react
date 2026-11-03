import dummyData from "../../../dummy/data"
import Img from "../../../ui/Img"
import BreadCrumb from "../../common/BreadCrumb"

const Shelf = function(){

    return(
        <section className="my-31">
            <div className="container">
                <BreadCrumb text='product' roottext={'home'}></BreadCrumb>
                <div className="my-20 flex items-center justify-center gap-15 flex-wrap">
                {
                    dummyData.shelf.map(function(item){
                        return(
                            <div key={item.id} className="flex w-[45%]">
                            <Img src={item.img} alt='pic' className={`w-full`}></Img>
                            </div>                            
                        )
                    })
                }
                </div>
            </div>
        </section>
    )
}

export default Shelf