import Img from "../../ui/Img"
import Para from "../../ui/Para"
import Logo from '../../assets/img/logo.png'
import dummyData from "../../dummy/data"
import { NavLink } from "react-router-dom"
import icons from "../../dummy/icons"

const Footer = function(){
let date = new Date();
let crrYear = date.getFullYear();
console.log(crrYear);
    return(
        <section className="py-13 bg-white1">
            <div className="container">
                <div className="flex flex-col items-start justify-center gap-15">
                    <div className="flex items-start gap-35.75">
                    <ul className="flex flex-col items-start gap-2">
                    <h4 className="mb-3 text-black1 text-lg font-bold leading-6 uppercase">menu</h4>
                    {
                    dummyData.menuData.map(function(item, index){
                        return(
                        <li key={index}>
                            <NavLink to={item.url}>
                                <Para className='text-grey1 hover:text-black1 trans' text={item.label}></Para>
                            </NavLink>
                        </li>
                        )
                    })
                    }
                    </ul>
                    <ul className="flex flex-col items-start gap-2">
                    <h4 className="mb-3 text-black1 text-lg font-bold leading-6 uppercase">shop</h4>
                    {
                    dummyData.footerData.category.map(function(item, index){
                        return(
                            <li key={index}>
                            <NavLink to={item.url}>
                                <Para className='text-grey1 hover:text-black1 trans' text={item.label}></Para>
                            </NavLink>
                        </li>
                        )
                    })
                    }
                    </ul>
                    <ul className="flex flex-col items-start gap-2">
                    <h4 className="mb-3 text-black1 text-lg font-bold leading-6 uppercase">help</h4>
                    {
                    dummyData.footerData.help.map(function(item, index){
                        return(
                            <li key={index}>
                            <NavLink to={item.url}>
                                <Para className='text-grey1 hover:text-black1 trans' text={item.label}></Para>
                            </NavLink>
                        </li>
                        )
                    })
                    }
                    </ul>
                    <div className="flex flex-col items-start gap-2">
                    <h4 className="mb-3 w-46 text-black1 text-lg font-bold leading-6 uppercase">(052) 611-5711 company@domain.com</h4>
                    <Para className='text-grey1 hover:text-black1 trans' text={`575 Crescent Ave. Quakertown, PA 18951`}></Para>
                    </div>
                    <Img src={Logo} alt='no pic'></Img>
                    </div>
                    <div className="w-full flex justify-between items-center">
                    <div className="flex gap-3">
                    {
                        icons.links.map(function(item, index){
                            let Icon = item.icon;
                            return(
                                <div key={index}>
                                <NavLink to={item.url}>
                                <Icon className="text-2xl hover:text-blue-600 trans"/>
                                </NavLink>
                                </div>
                            )
                        })
                    }
                    </div>
                    <div>
                        <Para className='text-grey1' text={`${crrYear} Orebi Minimal eCommerce Figma Template by Adveits`}></Para>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer