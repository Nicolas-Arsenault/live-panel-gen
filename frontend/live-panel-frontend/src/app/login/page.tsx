'use client'

import React, {useState} from 'react'
import Buttons from "$/Components/Buttons/Buttons"

export default function Login(){

    const [login, setLogin] = useState();

    let userName;
    let passWord;

    function handleLogin(){
        setLogin(login);
    }

    return(
        <div className="font-sans bg-black text-[rgb(126,126,126)] min-h-screen m-0 w-full h-full absolute bg-gradient-to-br from-neutral-600 to-black">
            <div className="background-animation">
                <div className="flex flex-col justify-center items-center h-screen w-full">
                    <div className="fixed w-100 p-16 border-4 border-[#1c1d20] bg-[#111214] text-white rounded-xl transition-all duration-500 hover:-translate-y-1 hover:scale-105">
                        <div className="mb-4">
                            <h2 className="text-white text-[1.40em]">Welcome To</h2>
                            <h1 className="text-white text-[1.5em]">Live Panel</h1>
                        </div>
                        <div className="flex flex-col gap-2">
                            <form onSubmit={handleLogin}>
                                <label className="text-[rgb(106,106,106)]">Username</label>
                                <input className="border border-[#202225] bg-[#111214] p-3 text-white font-sans rounded-md focus:outline-none focus:border-[#4dff00]" value={userName} placeholder="Your Username" type="text" />
                                <label className="text-[rgb(106,106,106)]">Password</label>
                                <input className="border border-[#202225] bg-[#111214] p-3 text-white font-sans rounded-md focus:outline-none focus:border-[#4dff00]" value={passWord} placeholder="Your Password" type="password" />
                                <Buttons text="Login"/>
                            </form>
                            <a href="/changepassword" className="text-[#4d4d4d] no-underline transition-colors duration-500 ease-in-out hover:text-white cursor-pointer">Change Your Password</a>
                            <a href="/register" className="text-[#4d4d4d] no-underline transition-colors duration-500 ease-in-out hover:text-white cursor-pointer">Create an account</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}