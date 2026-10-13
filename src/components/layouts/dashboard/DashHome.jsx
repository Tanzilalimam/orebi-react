import BreadCrumb from "../../common/BreadCrumb"
import dummyData from "../../../dummy/data"
import { NavLink, useLocation } from "react-router-dom"

const DashHome = function(){
let path = useLocation();
console.log(path.pathname);

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
                                <li key={index} className={`${item.url === path.pathname ? 'text-blue-600 border-b border-blue-600' : 'text-grey1 border-b border-black/20'} py-5 w-full text-base capitalize cursor-pointer`}>
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