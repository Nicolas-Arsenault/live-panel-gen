'use client'

import React, {useState} from 'react'
import { z } from "zod"
import { PasswordInput } from "@mantine/core"
import { useForm } from "@mantine/form"
import { IconLock } from '@tabler/icons-react';
import Buttons from "$/Components/Buttons/Buttons";
import Link from "next/link"


interface ChangePasswordPropsFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function ChangePasswordForm({ className, ...props}: ChangePasswordPropsFormProps){
    const [password, setpassword] = useState();

    let username;
    let oldPassword;
    let newPassword;
    let reenterNewPassword

    function handleChangePassword(){
        setpassword(password);
    }
    return(
        <div className="flex flex-col gap-2">
            <form onSubmit={handleChangePassword}>
                <label className="text-[rgb(106,106,106)]">Your Username:</label>
                <input className="border border-[#202225] bg-[#111214] p-3 mb-3 text-white font-sans rounded-md focus:outline-none focus:border-[#4dff00]" value={username} placeholder="Your Username" type="text" />
                
                <label className="text-[rgb(106,106,106)]">Old Password:</label>
                <input className="border border-[#202225] bg-[#111214] p-3 mb-3 text-white font-sans rounded-md focus:outline-none focus:border-[#4dff00]" value={oldPassword} placeholder="Your Old Password" type="password" />
                
                <label className="text-[rgb(106,106,106)]">New Password:</label>
                <input className="border border-[#202225] bg-[#111214] p-3 mb-3 text-white font-sans rounded-md focus:outline-none focus:border-[#4dff00]" value={newPassword} placeholder="Your New Password" type="password" />
                
                <label className="text-[rgb(106,106,106)]">Reenter New Password:</label>
                <input className="border border-[#202225] bg-[#111214] p-3 mb-3 text-white font-sans rounded-md focus:outline-none focus:border-[#4dff00]" value={reenterNewPassword} placeholder="Reenter New Password" type="password" />

                <Buttons text="Change Password"/>
            </form>
            <Link href={"/login"} className={"text-[#4d4d4d] no-underline transition-colors duration-500 ease-in-out hover:text-white cursor-pointer"}>
                Back to login
            </Link>
        </div>
    );
}