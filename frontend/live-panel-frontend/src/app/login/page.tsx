'use client'

import React, {useState} from 'react'
import Buttons from "$/Components/Buttons/Buttons"
import Link from "next/link"
import { SubmitHandler, useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver  } from "@hookform/resolvers/zod"

const schema = z.object({
    username: z.string(),
    password: z.string(),
}).required();

type FormFields = z.infer<typeof schema>;

export default function Login(){
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm<FormFields>({
        resolver: zodResolver(schema),
    });

    const onSubmit = (data: FormFields) => {
        try{
            
        }
        catch{

        }
    }
    return(
        <div className="font-sans bg-black text-[rgb(126,126,126)] min-h-screen m-0 w-full h-full absolute bg-gradient-to-br from-neutral-600 to-black">
            <div className="background-animation">
                <div className="flex flex-col justify-center items-center h-screen w-full">
                    <div className="fixed w-100 p-16 border-4 border-[#1c1d20] bg-[#111214] text-white rounded-xl transition-all duration-500 hover:-translate-y-1 hover:scale-105">
                        <div className="mb-4">
                            <h2 className="text-white text-[1.40em]">Welcome To</h2>
                            <h1 className="text-white text-[1.75em] text-shadow-white-5g">PhishHub</h1>
                        </div>
                        <div className="flex flex-col gap-2">
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <label className="text-[rgb(106,106,106)]">Username</label>
                                <input {...register("username")} className="border border-[#202225] bg-[#111214] p-3 text-white font-sans rounded-md focus:outline-none focus:border-[#4dff00]" placeholder="Your Username" type="text" />
                                {errors.username && <p>{errors.username.message}</p>}
                                
                                <label className="text-[rgb(106,106,106)]">Password</label>
                                <input {...register("password")} className="border border-[#202225] bg-[#111214] p-3 text-white font-sans rounded-md focus:outline-none focus:border-[#4dff00]" placeholder="Your Password" type="password" />
                                {errors.password && <p>{errors.password.message}</p>}

                                <Buttons text="Login"/>
                            </form>
                            <Link href={"/changepassword"} className={"text-[#4d4d4d] no-underline transition-colors duration-500 ease-in-out hover:text-white cursor-pointer"}>Change Your Password</Link>
                            <Link href={"/register"} className={"text-[#4d4d4d] no-underline transition-colors duration-500 ease-in-out hover:text-white cursor-pointer"}>Create An Account</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}