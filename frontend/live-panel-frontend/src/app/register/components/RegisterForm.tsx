'use client'

import React, {useState} from 'react'
import Buttons from "$/Components/Buttons/Buttons"
import Link from "next/link"
import { z } from "zod"
import { PasswordInput, TextInput } from "@mantine/core"
import { useForm } from "@mantine/form"
import { IconLock, IconUser } from '@tabler/icons-react';


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
    
    const form = useForm({
        initialValues: {
            username: "",
            password: "",
            reEnterPassword: "",
        },
        validate: {
            reEnterPassword: (value, values) =>
                value !== values.password ? 'Password did not match' : null,
        },
    });

    return(
        <div className="flex flex-col gap-2">
            <form onSubmit={form.onSubmit((values) => console.log(values))}>
                <TextInput
                    styles={{
                        input: { backgroundColor: '#111214', color: 'white', padding: '2em', marginBottom: '10px'}
                    }}
                    placeholder="Your New Username"
                    leftSection={<IconUser size={18} />}
                    key={form.key('username')}
                    {...form.getInputProps('username')}
                />
                <PasswordInput
                    styles={{
                        innerInput: {backgroundColor: '#111214', color: 'white', },
                        input: { padding: '2em', marginBottom: '10px'}
                    }}
                    placeholder="Your New Password"
                    leftSection={<IconLock size={18} />}
                    key={form.key('password')}
                    {...form.getInputProps('password')}
                />
                <PasswordInput
                    styles={{
                        innerInput: {backgroundColor: '#111214', color: 'white', },
                        input: { padding: '2em'}
                    }}
                    placeholder="Re-Enter Password"
                    leftSection={<IconLock size={18} />}
                    key={form.key('reEnterPassword')}
                    {...form.getInputProps('reEnterPassword')}
                />
                {/* <input className="border border-[#202225] bg-[#111214] p-3 mb-3 text-white font-sans rounded-md focus:outline-none focus:border-[#4dff00]" value={reenterPassWord} placeholder="Reenter New Password" type="password" /> */}

                <Buttons text="Create Account"/>
            </form>
                <Link href={"/login"} className={"text-[#4d4d4d] no-underline transition-colors duration-500 ease-in-out hover:text-white cursor-pointer"}>
                Back to login
            </Link>
        </div>
    );
}