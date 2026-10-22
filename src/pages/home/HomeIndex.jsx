import Banner from "../../components/pages/home/Banner"
import Service from "../../components/pages/home/Service"
import Shelf from "../../components/pages/home/Shelf"
import NewArrival from "../../components/pages/home/NewArrival"
import BestSeller from "../../components/pages/home/BestSeller"
import Banner2 from "../../components/pages/home/Banner2"
import SpecialOffer from "../../components/pages/home/SpecialOffer"

const HomeIndex = function(){

    return(
        <>
        <Banner></Banner>
        <Service></Service>
        <Shelf></Shelf>
        <NewArrival></NewArrival>
        <BestSeller></BestSeller>
        <Banner2></Banner2>
        <SpecialOffer></SpecialOffer>
        </>
    )
}

export default HomeIndex