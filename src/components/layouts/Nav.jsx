import { NavLink, useLocation } from "react-router-dom"
import Img from "../../ui/Img"
import Para from "../../ui/Para"
import Logo from '../../assets/img/logo.png'
import dummyData from "../../dummy/data"
// import { useEffect, useState } from "react"

const Nav = function(){
// let location = useLocation();
// let [path, setPath] = useState(location.pathname);
// useEffect(function(){
//     function viewPath(){
//         setPath(location.pathname);
//         console.log(setPath);
//     }
//     viewPath();
// }, [location.pathname]);

let path = useLocation();
console.log(path.pathname);

    return(
        <section className="py-8">
            <div className="container">
                <div className="flex justify-between items-center">
                    <NavLink to={'/'}>
                    <Img src={Logo} alt='no pic'></Img>
                    </NavLink>
                    <ul className="flex gap-10">
                    {
                        dummyData.menuData.map(function(item, index){
                            return(
                            <li key={index} className="list-none">
                            <NavLink to={item.url}>
                            <Para className={`${item.url === path.pathname ? 'text-red-600 border-b-3 border-b-red-600' : 'text-grey1'}`} text={item.label}></Para>
                            </NavLink>
                            </li>
                            )
                        })
                    }
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Nav