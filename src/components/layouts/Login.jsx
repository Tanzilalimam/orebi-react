import Input from "../../ui/Input"
import Para from "../../ui/Para"
import Btn from "../../ui/Btn"
import BreadCrumb from "../common/BreadCrumb"
import { useState } from "react"

const Login = function(){

let [formData, setFormData] = useState(
    {
        email: '',
        password: ''
    }
)

function handleForm(e){
    console.log(e.target.value);
    let {name, value} = e.target;
    setFormData(function(prevData){
            return {
                ...prevData,
                [name]: value
            }
        })
        console.log(formData);
}
    
    return(
        <section className="my-31">
            <div className="container">
            <div>
            <BreadCrumb className='' text='login' roottext='home'></BreadCrumb>                
            <Para className={'mt-30 mb-15 w-161 text-grey2 text-sm leading-7.5'} text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the."></Para>
            <div className="py-14 flex flex-col items-start gap-8 border-y-2 border-y-black/10">
                <h2 className="text-black1 text-[39px] font-bold capitalize">returning customer</h2>
                <div className="flex items-center gap-15">
                    <div className="flex flex-col items-start gap-1">
                        <div className="text-black1 font-bold capitalize">email address</div>
                        <Input type="email" name="email" placeholder="enter email" className="border-b border-b-black/10" onChange={handleForm}></Input>
                    </div>
                    <div className="flex flex-col items-start gap-1">
                        <div className="text-black1 font-bold capitalize">password</div>
                        <Input type="password" name="password" placeholder="password" className="border-b border-b-black/10" onChange={handleForm}></Input>
                    </div>
                </div>
                    <Btn className="bg-white hover:bg-black1 text-black2 hover:text-white" text={'login'}></Btn>
            </div>
            <div className="py-14 flex flex-col items-start gap-8">
                <h2 className="text-black1 text-[39px] font-bold capitalize">new customer</h2>
                <Para className={'w-161 text-grey2 text-sm leading-7.5'} text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the."></Para>
                <Btn className="bg-white hover:bg-black1 text-black2 hover:text-white" text={'continue'}></Btn>
            </div>
            </div>
            </div>
        </section>
    )
}

export default Login