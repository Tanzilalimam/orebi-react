import BreadCrumb from "../../common/BreadCrumb"
import dummyData from "../../../dummy/data"

const DashHome = function(){

    return(
        <section className="my-31">
            <div className="container">
                <div className="flex flex-col items-start gap-31.75">
                    <BreadCrumb text={'my account'} roottext={'home'}></BreadCrumb>
                <div className="flex items-start gap-14.25">
                    <ul className="w-45 flex flex-col items-start justify-center gap-5">
                    {
                      dummyData.dashData.map(function(item, index){
                        return(
                            <li key={index} className="py-5 w-full text-grey1 text-base border-b border-black/20 capitalize cursor-pointer">{item.label}</li>
                        )
                      })  
                    }
                    </ul>
                </div>
                </div>
            </div>
        </section>
    )
}

export default DashHome