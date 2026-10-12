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
        cPass: '',
        phone: '',
        address1: '',
        address2: '',
        city: '',
        postCode: '',
        division: '',
        district: '',

    }
)

let [err, setErr] = useState({
    fname: false,
    lname: false,
    email: false,
    password: false,
    cPass: false,
    phone: false,
    address1: false,
    address2: false,
    city: false,
    postCode: false,
    division: false,
    district: false,
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
    if(!formData.cPass){
        console.log('confirm password required');
        setErr(function(prevErr){
            return{
                ...prevErr,
                // cPass: 'password required'
                cPass: !formData.cPass ? 'confirm password required' : ''
                // cPass: true            
            }
        })
    }
    else if(formData.password !== formData.cPass){
        console.log('paaswords do not match');
        setErr(function(prevErr){
            return{
                ...prevErr,
                cPass: 'passwords do not match'
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
    if(!formData.address1){
        console.log('address 1 required');
        setErr(function(prevErr){
            return{
                ...prevErr,
                // address1: 'address 1 required'
                address1: !formData.address1 ? 'address1 required' : ''
                // address1: true       
            }
        })
    }
    if(!formData.address2){
        console.log('address 2 required');
        setErr(function(prevErr){
            return{
                ...prevErr,
                // address2: 'address 2 required'
                address2: !formData.address2 ? 'address2 required' : ''
                // address2: true       
            }
        })
    }
    if(!formData.city){
    console.log('city required');
    setErr(function(prevErr){
            return{
                ...prevErr,
                // address2: 'city required'
                city: !formData.city ? 'city required' : ''
                // city: true       
            }
        })
    }
    if(!formData.postCode){
    console.log('postal code required');
    setErr(function(prevErr){
            return{
                ...prevErr,
                // postCode: 'postal code required'
                postCode: !formData.postCode ? 'postal code required' : ''
                // postCode: true
            }
        })
    }
    if(!formData.district){
    console.log('district required');
    setErr(function(prevErr){
            return{
                ...prevErr,
                // district: 'district required'
                district: !formData.district ? 'district required' : ''
                // district: true
            }
        })
    }
    if(!formData.division){
    console.log('division required');
    setErr(function(prevErr){
            return{
                ...prevErr,
                // division: 'division required'
                division: !formData.division ? 'division required' : ''
                // division: true
            }
        })
    }
}
useEffect(function(){
    console.log(formData);
}, [formData])

useEffect(function(){
    console.log(err);
}, [err])

    return(
        <section className="my-31">
            <div className="container">
            <div>
            <BreadCrumb className='' text='sign up' roottext='home'></BreadCrumb>                
            <Para className={'mt-30 mb-15 w-161 text-grey2 text-sm leading-7.5'} text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the."></Para>
            <div className="py-14 flex flex-col items-start gap-8 border-y border-y-black/10">
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
                        <Input type="text" name="phone" placeholder="your phone number" className={`border-b ${
                            err.phone? 'border-b-red-600':'border-b-black/10'
                        }`} onChange={handleForm}></Input>
                        {err.phone && (
                            <Para className={`text-red-600`} text={`${err.phone}`}></Para>
                        )
                        }
                    </div>
                </div>
            </div>
            <div className="py-14 flex flex-col items-start gap-8 border-t border-t-black/10">
                <h2 className="text-black1 text-[39px] font-bold capitalize">new customer</h2>
                <div className="flex items-center gap-15">
                    <div className="flex flex-col items-start gap-1">
                        <div className="text-black1 font-bold capitalize">address 1</div>
                        <Input type="text" name="address1" placeholder="enter address 1" className={`border-b ${
                            err.address1?  'border-b-red-600': 'border-b-black/10'

                        }`} onChange={handleForm}></Input>
                        {err.address1 && (
                            <Para className={`text-red-600`} text={`${err.address1}`}></Para>
                        )
                        }
                    </div>
                    <div className="flex flex-col items-start gap-1">
                        <div className="text-black1 font-bold capitalize">address 2</div>
                        <Input type="text" name="address2" placeholder="address-2" className={`border-b ${
                            err.address2? 'border-b-red-600':'border-b-black/10'
                        }`} onChange={handleForm}></Input>
                        {err.address2 && (
                            <Para className={`text-red-600`} text={`${err.address2}`}></Para>
                        )
                        }
                    </div>
                </div>
                <div className="flex items-center gap-15">
                    <div className="flex flex-col items-start gap-1">
                        <div className="text-black1 font-bold capitalize">city</div>
                        <Input type="text" name="city" placeholder="city" className={`border-b ${
                            err.city?  'border-b-red-600': 'border-b-black/10'

                        }`} onChange={handleForm}></Input>
                        {err.city && (
                            <Para className={`text-red-600`} text={`${err.city}`}></Para>
                        )
                        }
                    </div>
                    <div className="flex flex-col items-start gap-1">
                        <div className="text-black1 font-bold capitalize">postal code</div>
                        <Input type="text" name="postCode" placeholder="postal code" className={`border-b ${
                            err.postCode? 'border-b-red-600':'border-b-black/10'
                        }`} onChange={handleForm}></Input>
                        {err.postCode && (
                            <Para className={`text-red-600`} text={`${err.postCode}`}></Para>
                        )
                        }
                    </div>
                </div>
                <div className="flex items-center gap-15">
                    <div className="flex flex-col items-start gap-1">
                        <div className="text-black1 font-bold capitalize">division</div>
                        <Input type="text" name="division" placeholder="division" className={`border-b ${
                            err.division?  'border-b-red-600': 'border-b-black/10'

                        }`} onChange={handleForm}></Input>
                        {err.division && (
                            <Para className={`text-red-600`} text={`${err.division}`}></Para>
                        )
                        }
                    </div>
                    <div className="flex flex-col items-start gap-1">
                        <div className="text-black1 font-bold capitalize">district</div>
                        <Input type="text" name="district" placeholder="district" className={`border-b ${
                            err.district? 'border-b-red-600':'border-b-black/10'
                        }`} onChange={handleForm}></Input>
                        {err.district && (
                            <Para className={`text-red-600`} text={`${err.district}`}></Para>
                        )
                        }
                    </div>
                </div>
                <div className="my-15 flex flex-col items-start gap-10 border-y border-y-black/10">
                    <h2 className="mt-12 text-black1 text-[39px] font-bold capitalize">password</h2>
                    <div className=" mb-16 flex items-center gap-15">
                    <div className="flex flex-col items-start gap-1">
                        <div className="text-black1 font-bold capitalize">password</div>
                        <Input type="text" name="password" placeholder="password" className={`border-b ${
                            err.password?  'border-b-red-600': 'border-b-black/10'

                        }`} onChange={handleForm}></Input>
                        {err.password && (
                            <Para className={`text-red-600`} text={`${err.password}`}></Para>
                        )
                        }
                    </div>
                    <div className="flex flex-col items-start gap-1">
                        <div className="text-black1 font-bold capitalize">confirm password</div>
                        <Input type="text" name="cPass" placeholder="confirm password" className={`border-b ${
                            err.cPass? 'border-b-red-600':'border-b-black/10'
                        }`} onChange={handleForm}></Input>
                        {err.cPass && (
                            <Para className={`text-red-600`} text={`${err.cPass}`}></Para>
                        )
                        }
                    </div>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="text-grey1 text-sm flex items-center gap-3">
                        <input type="checkbox" name="cbox" className="" />
                        I've read and agree to the policy
                    </div>
                    <div className="text-grey1 text-sm flex items-center gap-4 capitalize">
                        subscribe newsletter
                        <input type="radio" name="radio" className="" />yes
                        <input type="radio" name="radio" className="" />no
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