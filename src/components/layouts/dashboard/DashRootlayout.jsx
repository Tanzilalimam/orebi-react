import { Outlet } from "react-router-dom"
import Nav from "../Nav"
import Cate from "../Cate"
import DashHome from "./DashHome"
import Footer from "../Footer"

const DashRootlayout = function(){

    return(
        <>
        <Nav></Nav>
        <Cate></Cate>
        <div className="container">
        <div className="my-31 flex items-start gap-10">
        <DashHome></DashHome>
        <Outlet></Outlet>
        </div>
        </div>
        <Footer></Footer>
        </>
    )
}

export default DashRootlayout