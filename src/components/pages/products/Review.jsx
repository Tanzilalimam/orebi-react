import { useState } from "react";
import dummyData from "../../../dummy/data"
import Btn from "../../../ui/Btn"

const Review = function(){
let [reviews, setReviews] = useState(dummyData.reviews ?? []);

let [formData, setFormData] = useState({
    name: '',
    mail: '',
    mess: '',
})
function handleChange(e){
    console.log(e.target.value);
    const {name, value} = e.target;
    setFormData(prev =>({
        ...prev,
        [name]: value
    }))
}

function handlePost(){
    if(!formData.name.trim() || !formData.mail.trim() || !formData.mess.trim()){
        console.log('fill up these');
        return;
    }
    const newReview = {
        id: Date.now(),
        name: formData.name,
        mail: formData.mail,
        mess: formData.mess
    };
    setReviews(prev => [...prev, newReview]);
    setFormData({
        name: '',
        mail: '',
        mess: ''
    })
    console.log('clicked');
}
    return(
        <section className="my-0">
            <div className="mt-5 p-3">
                <span className="text-grey2 text-sm">
                {reviews.length} reviews for product
                </span>
                <div className="my-10 flex flex-col items-start gap-5">
                {
                    reviews.map((item)=>{
                        return(
                            <div key={item.id} className="flex flex-col items-start gap-1">
                            <div className="text-black1 capitalize">{item.name}</div>
                            <div className="pl-2 text-grey2 text-sm">- {item.mess}</div>
                        </div>
                        )
                    })
                }
                </div>
                <div className="flex flex-col items-start gap-5">
                <h4 className="text-black1 font-bold">Add a Review</h4>
                <input type="text" name="name" value={formData.name} className="py-2 w-[35%] text-grey1 text-sm border-b border-b-black/10 outline-0" placeholder="enter name" onChange={handleChange} />
                <input type="text" name="mail" value={formData.mail} className="py-2 w-[35%] text-grey1 text-sm border-b border-b-black/10 outline-0" placeholder="enter mail" onChange={handleChange} />
                <textarea name="mess" value={formData.mess} className="py-2 w-[35%] text-grey1 text-sm border-b border-b-black/10 outline-0" placeholder="enter review" onChange={handleChange}></textarea>
                <Btn className="trans hover:bg-black1 hover:text-white" text='post' onclick={handlePost}></Btn>
                </div>
            </div>
        </section>
    )
}

export default Review