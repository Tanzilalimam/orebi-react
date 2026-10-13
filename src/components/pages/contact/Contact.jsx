import BreadCrumb from "../../common/BreadCrumb"
import Input from "../../../ui/Input"
import Btn from "../../../ui/Btn"
import { useEffect, useState } from "react"

const Contact = function () {
let [data, setData] = useState({
    fname: '',
    email: '',
    message: ''
});

let [err, setErr] = useState({
    fname: false,
    email: false,
    message: false
});

function handlePost(e){
    console.log(e.target.value);
    let {name, value} = e.target;
    setData(function(prevData){
        return{
            ...prevData,
            [name]: value
        }
    })
    setErr(function(prevErr){
        return{
            ...prevErr,
            [name]: false
        }
    })

    if(!data.fname){
        console.log('name required');
        setErr(function(prevErr){
            return{
                ...prevErr,
                fname: !data.fname ? 'name required' : ''
            }
        })
        if(!data.email){
            console.log('mail required');
            setErr(function(prevErr){
                return{
                    ...prevErr,
                    email: !data.email ? 'mail required' : ''
                }
            })
        }
        if(!data.message){
            console.log('message required');
            setErr(function(prevErr){
                return{
                    ...prevErr,
                    message: !data.message ? 'message required' : ''
                }
            })
        }
    }
}

useEffect(function(){
    console.log(data);
}, [data]);

useEffect(function(){
    console.log(err);
}, [err]);

    return (
        <section className="my-31">
            <div className="container">
                <div className="flex flex-col items-start gap-15">
                    <BreadCrumb text={'contacts'} roottext={'home'}></BreadCrumb>
                    <div className="flex flex-col items-start gap-10.5">
                        <h2 className="text-black1 text-[39px] font-bold capitalize">fill up the form</h2>
                        <div className="flex flex-col items-start gap-2">
                            <div className="text-black1 font-bold capitalize">name</div>
                            <Input type="text" name="fname" placeholder="your name" className={`border-b ${err.fname? 'border-b-red-600': 'border-b-black/20'}`}></Input>
                            {err.fname && (
                                <div className="text-red-600 text-sm">{`${err.fname}`}</div>
                            )
                            }
                        </div>
                        <div className="flex flex-col items-start gap-2">
                            <div className="text-black1 font-bold capitalize">email</div>
                            <Input type="text" name="email" placeholder="your email" className={`border-b ${err.email ? 'border-b-red-600' : 'border-b-black/20'}`}></Input>
                            {err.email &&(
                                <div className="text-red-600 text-sm">{`${err.email}`}</div>
                            )
                            }
                        </div>
                        <div className="flex flex-col items-start gap-2">
                            <div className={`text-black1 font-bold capitalize`}>message</div>
                            <textarea name="message" className={`py-3 w-127 text-grey1 text-sm outline-0 border-b ${err.message? 'border-b-red-600': 'border-b-black/20'}`} placeholder="enter your message"></textarea>
                            {err.message &&(
                                <div className="text-red-600 text-sm">{`${err.message}`}</div>
                            )

                            }
                        </div>
                    </div>
                    <Btn className="bg-white hover:bg-black1 text-black2 hover:text-white" text={'post'} onclick={handlePost}></Btn>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1350.9771739224539!2d90.39904646809597!3d23.868909770531435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1791893795524!5m2!1sen!2sbd" frameborder="0" className="w-full h-143"></iframe>
                </div>
            </div>
        </section>
    )
}

export default Contact