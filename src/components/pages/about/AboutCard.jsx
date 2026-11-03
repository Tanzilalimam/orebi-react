import Para from "../../../ui/Para"

const AboutCard = function(){

    return(
        <section className="mb-32">
            <div className="container">
                <div className="flex items-center gap-10">
                    <div className="w-150 flex flex-col items-start gap-3">
                        <h3 className="text-black1 text-2xl font-bold leading-9 capitalize">our vision</h3>
                        <Para className='text-grey1 leading-7.5' text={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.`}></Para>
                    </div>
                    <div className="w-150 flex flex-col items-start gap-3">
                        <h3 className="text-black1 text-2xl font-bold leading-9 capitalize">our story</h3>
                        <Para className='text-grey1 leading-7.5' text={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.`}></Para>
                    </div>
                    <div className="w-150 flex flex-col items-start gap-3">
                        <h3 className="text-black1 text-2xl font-bold leading-9 capitalize">our brands</h3>
                        <Para className='text-grey1 leading-7.5' text={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.`}></Para>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutCard