import Input from "../../ui/Input"
import Para from "../../ui/Para"
import Btn from "../../ui/Btn"
import BreadCrumb from "../common/BreadCrumb"
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"

const Login = function(){

let [formData, setFormData] = useState(
    {
        email: '',
        password: ''
    }
)

let [err, setErr] = useState({
    email: false,
    password: false
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

function handleLogin(){
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
}
useEffect(function(){
    console.log(err);
}, [err])
    
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
                        <Input type="email" name="email" placeholder="enter email" className={`border-b ${
                            err.email?  'border-b-red-700': 'border-b-black/10'

                        }`} onChange={handleForm}></Input>
                        {err.email && (
                            <Para className={`text-red-700`} text={`${err.email}`}></Para>
                        )
                        }
                    </div>
                    <div className="flex flex-col items-start gap-1">
                        <div className="text-black1 font-bold capitalize">password</div>
                        <Input type="password" name="password" placeholder="enter password" className={`border-b ${
                            err.password? 'border-b-red-700':'border-b-black/10'
                        }`} onChange={handleForm}></Input>
                        {err.password && (
                            <Para className={`text-red-700`} text={`${err.password}`}></Para>
                        )
                        }
                    </div>
                </div>
                    <Btn className="bg-white hover:bg-black1 text-black2 hover:text-white" onclick={handleLogin} text={'login'}></Btn>
            </div>
            <div className="py-14 flex flex-col items-start gap-8">
                <h2 className="text-black1 text-[39px] font-bold capitalize">new customer</h2>
                <Para className={'w-161 text-grey2 text-sm leading-7.5'} text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the."></Para>
                <NavLink to={'/registration'}>
                <Btn className="bg-white hover:bg-black1 text-black2 hover:text-white" text={'continue'}></Btn>
                </NavLink>
            </div>
            </div>
            </div>
        </section>
    )
}

export default Login