import BreadCrumb from "../../common/BreadCrumb"
import dummyData from "../../../dummy/data"
import { NavLink } from "react-router-dom"

const DashHome = function(){

    return(
        <section>
            <div>
                <div className="flex flex-col items-start gap-20">
                    <BreadCrumb text={'my account'} roottext={'home'}></BreadCrumb>
                <div className="flex items-start gap-14.25">
                    <ul className="w-45 flex flex-col items-start justify-center gap-10">
                    {
                      dummyData.dashData.map(function(item, index){
                        return(
                                <li key={index} className="py-5 w-full text-grey1 text-base border-b border-black/20 capitalize cursor-pointer">
                            <NavLink to={item.url}>
                                {item.label}
                            </NavLink>
                                </li>
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