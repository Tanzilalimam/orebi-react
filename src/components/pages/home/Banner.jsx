import Bannerimg from '../../../assets/img/banner.png'
import Img from '../../../ui/Img'
import Btn from "../../../ui/Btn"

const Banner = function(){

    return(
        <>
        <section className="py-12 bg-white2">
            <div className="container">
                <div className="w-ful flex justify-around items-center">
                    <div className="flex flex-col items-start gap-7.5">
                        <h1 className="text-black1 text-5xl font-bold capitalize">final offer</h1>
                        <div className="text-grey3">Up to <span className="text-black1 text-[40px] font-bold">50%</span> sale for all funtime items</div>
                        <Btn className="hover:bg-black hover:text-white" text={'shop now'}></Btn>
                    </div>
                    <div>
                        <Img src={Bannerimg} alt='banner' className={`w-110`}></Img>
                    </div>
                </div>
            </div>
        </section>
                <div className='mb-10 py-5.5 px-39.75 bg-white border-b border-b-white1 flex justify-between items-center'>
                    <div>2 years waranty</div>
                    <div>2 years waranty</div>
                    <div>2 years waranty</div>
                </div>
        </>
    )
}

export default Banner