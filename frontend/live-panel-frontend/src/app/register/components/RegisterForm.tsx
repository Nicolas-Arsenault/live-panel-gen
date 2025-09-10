'use client'

import React, {useState} from 'react'
import Buttons from "$/Components/Buttons/Buttons"
import Link from "next/link"
import { PasswordInput, TextInput } from "@mantine/core"
import { IconLock, IconUser } from '@tabler/icons-react';
import { SubmitHandler, useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';
import { useRouter } from 'next/navigation';
import { z } from "zod"
import { zodResolver  } from "@hookform/resolvers/zod"

interface ChangePasswordPropsFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const schema = z.object({
    username: z.string(),
    password: z.string(),
    reEnterPassword: z.string(),
}).required()
.refine((data) => data.password === data.reEnterPassword, {
    message: "Passwords don't match."
});

type FormFields = z.infer<typeof schema>;

export function RegisterForm({ className, ...props}: ChangePasswordPropsFormProps){
    const goto = useRouter();

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm<FormFields>({
        resolver: zodResolver(schema),
    });

    async function onSubmit(data: FormFields){
        const username = data.username;
        const password = data.password;
        const password_confirm = data.reEnterPassword;

        const resp = await fetch('http://localhost:8080/auth/register', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ username, password, password_confirm })
        });

        if(resp.ok){
            goto.push('/login');
        }
        else{
            console.log("User already exist!");
        }
    }

    return(
        <div className="flex flex-col gap-2">
            <form onSubmit={handleSubmit(onSubmit)}>

                <label className="text-[rgb(106,106,106)]">Username</label>
                <input {...register("username")} className="border border-[#202225] bg-[#111214] p-3 text-white font-sans rounded-md focus:outline-none focus:border-[#4dff00]" placeholder="Your Username" type="text" />
                {errors.username && <p>{errors.username.message}</p>}
                
                <label className="text-[rgb(106,106,106)]">Password</label>
                <input {...register("password")} className="border border-[#202225] bg-[#111214] p-3 text-white font-sans rounded-md focus:outline-none focus:border-[#4dff00]" placeholder="Your Password" type="password" />
                {errors.password && <p>{errors.password.message}</p>}

                <label className="text-[rgb(106,106,106)]">Confirm Password:</label>
                <input {...register("reEnterPassword")} className="border border-[#202225] bg-[#111214] p-3 text-white font-sans rounded-md focus:outline-none focus:border-[#4dff00]" placeholder="Confirm Password" type="password" />
                {errors.reEnterPassword && <p>{errors.reEnterPassword.message}</p>}
                <Buttons text="Create Account"/>
            </form>
            <Link href={"/login"} className={"text-[#4d4d4d] no-underline transition-colors duration-500 ease-in-out hover:text-white cursor-pointer"}>
                Back to login
            </Link>
        </div>
    );
}