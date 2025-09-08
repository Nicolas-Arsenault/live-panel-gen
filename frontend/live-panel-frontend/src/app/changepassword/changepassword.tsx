'use client'

import React, {useState} from 'react'
import Buttons from "$/Components/Buttons/Buttons";

export default function ChangePassword(){

    const [password, setpassword] = useState();

    let oldPassword;
    let newPassword;
    let reenterNewPassword

    function handleChangePassword(){
        setpassword(password);
    }

    return(
        <div className="font-sans bg-black text-[rgb(126,126,126)] min-h-screen m-0 w-full h-full absolute bg-gradient-to-br from-neutral-600 to-black">
            <div className="background-animation">
                <div className="flex flex-col justify-center items-center h-screen w-full">
                    <div className="fixed w-100 p-16 border-4 border-[#1c1d20] bg-[#111214] text-white rounded-xl">
                        <div className="mb-4">
                            <h2 className="text-white text-[1.15em]">Welcome To</h2>
                            <h1 className="text-white text-[1.15em]">Live Panel</h1>
                        </div>
                        <div className="flex flex-col gap-2">
                            <form onSubmit={handleChangePassword}>
                                <label className="text-[rgb(106,106,106)]">Old Password:</label>
                                <input className="border border-[#202225] bg-[#111214] p-3 mb-3 text-white font-sans rounded-md focus:outline-none focus:border-[#4dff00]" value={oldPassword} placeholder="Your Old Password" type="password" />
                                <label className="text-[rgb(106,106,106)]">New Password:</label>
                                <input className="border border-[#202225] bg-[#111214] p-3 mb-3 text-white font-sans rounded-md focus:outline-none focus:border-[#4dff00]" value={newPassword} placeholder="Your New Password" type="password" />
                                
                                <label className="text-[rgb(106,106,106)]">Reenter New Password:</label>
                                <input className="border border-[#202225] bg-[#111214] p-3 mb-3 text-white font-sans rounded-md focus:outline-none focus:border-[#4dff00]" value={reenterNewPassword} placeholder="Reenter New Password" type="password" />

                                <Buttons text="Change Password"/>
                            </form>
                            <a href="#" className="text-[#4d4d4d] no-underline transition-colors duration-500 ease-in-out hover:text-white cursor-pointer">Back to login</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}