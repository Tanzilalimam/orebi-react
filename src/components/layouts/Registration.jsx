import { useEffect, useState } from "react"
import BreadCrumb from "../common/BreadCrumb"
import Para from "../../ui/Para"
import Input from "../../ui/Input"
import Btn from "../../ui/Btn"


const Registration = function(){

let [formData, setFormData] = useState(
    {
        fname: '',
        lname: '',
        email: '',
        password: '',
        phone: ''
    }
)

let [err, setErr] = useState({
    fname: false,
    lname: false,
    email: false,
    password: false,
    phone: false
});

function handleForm(e){
    // console.log(e.target.value);
    let {name, value} = e.target;
    setFormData(function(prevData){
            return {
                ...prevData,
                [name]: value
            }
        })
    setErr(function(prevErr){
            return {
                ...prevErr,
                [name]: false
            }
        })
}

function handleSign(){
    console.log(formData);
    let mailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!formData.email){
        console.log('mail required');
        setErr(function(prevErr){
            return{
                ...prevErr,
                // email: 'mail required'
                email: !formData.email? 'mail required' : ''
                // email: true
            }
        })
    }
    else if(!mailRegex.test(formData.email)){
        setErr(function(prevErr){
            return{
                ...prevErr,
                email: 'please enter valid mail'
            }
        })
    }
    if(!formData.password){
        console.log('password required');
        setErr(function(prevErr){
            return{
                ...prevErr,
                // password: 'password required'
                password: !formData.password ? 'password required' : ''
                // password: true            
            }
        })
    }
    if(!formData.fname){
        console.log('first name required');
        setErr(function(prevErr){
            return{
                ...prevErr,
                // password: 'password required'
                fname: !formData.fname ? 'first name required' : ''
                // password: true            
            }
        })
    }
    if(!formData.lname){
        console.log('last name required');
        setErr(function(prevErr){
            return{
                ...prevErr,
                // password: 'password required'
                lname: !formData.lname ? 'password last name' : ''
                // password: true            
            }
        })
    }
    if(!formData.phone){
        console.log('phone no. required');
        setErr(function(prevErr){
            return{
                ...prevErr,
                // password: 'password required'
                phone: !formData.phone ? 'phone no. required' : ''
                // password: true            
            }
        })
    }
}
useEffect(function(){
    console.log(err);
}, [err])

    return(
        <section className="my-31">
            <div className="container">
            <div>
            <BreadCrumb className='' text='sign up' roottext='home'></BreadCrumb>                
            <Para className={'mt-30 mb-15 w-161 text-grey2 text-sm leading-7.5'} text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the."></Para>
            <div className="py-14 flex flex-col items-start gap-8 border-y-2 border-y-black/10">
                <h2 className="text-black1 text-[39px] font-bold capitalize">personal info</h2>
                <div className="flex items-center gap-15">
                    <div className="flex flex-col items-start gap-1">
                        <div className="text-black1 font-bold capitalize">first name</div>
                        <Input type="text" name="fname" placeholder="first name" className={`border-b ${
                            err.fname?  'border-b-red-600': 'border-b-black/10'

                        }`} onChange={handleForm}></Input>
                        {err.fname && (
                            <Para className={`text-red-600`} text={`${err.fname}`}></Para>
                        )
                        }
                    </div>
                    <div className="flex flex-col items-start gap-1">
                        <div className="text-black1 font-bold capitalize">last name</div>
                        <Input type="text" name="lname" placeholder="last name" className={`border-b ${
                            err.lname? 'border-b-red-600':'border-b-black/10'
                        }`} onChange={handleForm}></Input>
                        {err.lname && (
                            <Para className={`text-red-600`} text={`${err.lname}`}></Para>
                        )
                        }
                    </div>
                </div>
                <div className="flex items-center gap-15">
                    <div className="flex flex-col items-start gap-1">
                        <div className="text-black1 font-bold capitalize">email address</div>
                        <Input type="email" name="email" placeholder="enter email" className={`border-b ${
                            err.email?  'border-b-red-600': 'border-b-black/10'

                        }`} onChange={handleForm}></Input>
                        {err.email && (
                            <Para className={`text-red-600`} text={`${err.email}`}></Para>
                        )
                        }
                    </div>
                    <div className="flex flex-col items-start gap-1">
                        <div className="text-black1 font-bold capitalize">telephone</div>
                        <Input type="number" name="phone" placeholder="your phone number" className={`border-b ${
                            err.phone? 'border-b-red-600':'border-b-black/10'
                        }`} onChange={handleForm}></Input>
                        {err.phone && (
                            <Para className={`text-red-600`} text={`${err.phone}`}></Para>
                        )
                        }
                    </div>
                </div>
            </div>
            <div className="py-14 flex flex-col items-start gap-8">
                <h2 className="text-black1 text-[39px] font-bold capitalize">new customer</h2>
                <div className="flex items-center gap-15">
                    <div className="flex flex-col items-start gap-1">
                        <div className="text-black1 font-bold capitalize">address 1</div>
                        <Input type="address" name="address-1" placeholder="enter email" className={`border-b ${
                            err.email?  'border-b-red-600': 'border-b-black/10'

                        }`} onChange={handleForm}></Input>
                        {err.email && (
                            <Para className={`text-red-600`} text={`${err.email}`}></Para>
                        )
                        }
                    </div>
                    <div className="flex flex-col items-start gap-1">
                        <div className="text-black1 font-bold capitalize">address 2</div>
                        <Input type="address" name="address2" placeholder="address-2" className={`border-b ${
                            err.phone? 'border-b-red-600':'border-b-black/10'
                        }`} onChange={handleForm}></Input>
                        {err.phone && (
                            <Para className={`text-red-600`} text={`${err.phone}`}></Para>
                        )
                        }
                    </div>
                </div>
                <div className="flex items-center gap-15">
                    <div className="flex flex-col items-start gap-1">
                        <div className="text-black1 font-bold capitalize">city</div>
                        <Input type="text" name="city" placeholder="city" className={`border-b ${
                            err.email?  'border-b-red-600': 'border-b-black/10'

                        }`} onChange={handleForm}></Input>
                        {err.email && (
                            <Para className={`text-red-600`} text={`${err.email}`}></Para>
                        )
                        }
                    </div>
                    <div className="flex flex-col items-start gap-1">
                        <div className="text-black1 font-bold capitalize">postal code</div>
                        <Input type="text" name="poscode" placeholder="postal code" className={`border-b ${
                            err.phone? 'border-b-red-600':'border-b-black/10'
                        }`} onChange={handleForm}></Input>
                        {err.phone && (
                            <Para className={`text-red-600`} text={`${err.phone}`}></Para>
                        )
                        }
                    </div>
                </div>
                <div className="flex items-center gap-15">
                    <div className="flex flex-col items-start gap-1">
                        <div className="text-black1 font-bold capitalize">division</div>
                        <Input type="text" name="division" placeholder="division" className={`border-b ${
                            err.email?  'border-b-red-600': 'border-b-black/10'

                        }`} onChange={handleForm}></Input>
                        {err.email && (
                            <Para className={`text-red-600`} text={`${err.email}`}></Para>
                        )
                        }
                    </div>
                    <div className="flex flex-col items-start gap-1">
                        <div className="text-black1 font-bold capitalize">district</div>
                        <Input type="text" name="district" placeholder="district" className={`border-b ${
                            err.phone? 'border-b-red-600':'border-b-black/10'
                        }`} onChange={handleForm}></Input>
                        {err.phone && (
                            <Para className={`text-red-600`} text={`${err.phone}`}></Para>
                        )
                        }
                    </div>
                </div>
                <div className="flex flex-col items-start gap-10 border-t border-t-black/10">

                </div>
                <h2 className="text-black1 text-[39px] font-bold capitalize">password</h2>
                <div className="flex items-center gap-15">
                    <div className="flex flex-col items-start gap-1">
                        <div className="text-black1 font-bold capitalize">division</div>
                        <Input type="text" name="division" placeholder="division" className={`border-b ${
                            err.email?  'border-b-red-600': 'border-b-black/10'

                        }`} onChange={handleForm}></Input>
                        {err.email && (
                            <Para className={`text-red-600`} text={`${err.email}`}></Para>
                        )
                        }
                    </div>
                    <div className="flex flex-col items-start gap-1">
                        <div className="text-black1 font-bold capitalize">district</div>
                        <Input type="text" name="district" placeholder="district" className={`border-b ${
                            err.phone? 'border-b-red-600':'border-b-black/10'
                        }`} onChange={handleForm}></Input>
                        {err.phone && (
                            <Para className={`text-red-600`} text={`${err.phone}`}></Para>
                        )
                        }
                    </div>
                </div>

                <Btn className="bg-white hover:bg-black1 text-black2 hover:text-white" text={'sign in'} onclick={handleSign}></Btn>
            </div>
            </div>
            </div>
        </section>
    )
}

export default Registration