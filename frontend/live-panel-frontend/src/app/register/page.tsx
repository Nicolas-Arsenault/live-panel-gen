
'use client'

import React, {useState} from 'react'
import Buttons from "$/Components/Buttons/Buttons"
import Link from "next/link"
import { z } from "zod"
import { PasswordInput } from "@mantine/core"
import {
  MantineProvider
} from "@mantine/core";
import { IconLock } from '@tabler/icons-react';

import { RegisterForm } from "./components/RegisterForm"

export default function Regsiter(){

    return(
        <MantineProvider>
            <div className="font-sans bg-black text-[rgb(126,126,126)] min-h-screen m-0 w-full h-full absolute bg-gradient-to-br from-neutral-600 to-black">
                <div className="background-animation">
                    <div className="flex flex-col justify-center items-center h-screen w-full">
                        <div className="fixed w-100 p-16 border-4 border-[#1c1d20] bg-[#111214] text-white rounded-xl transition-all duration-500 hover:-translate-y-1 hover:scale-105">
                            <div className="mb-4">
                                <h1 className="text-white text-[1.5em]">Register an account</h1>
                            </div>
                            <RegisterForm/>
                        </div>
                    </div>
                </div>
            </div>
        </MantineProvider>
    );
}