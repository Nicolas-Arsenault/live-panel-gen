import type { Metadata } from 'next';
import { Geist, Geist_Mono } from "next/font/google";
import "$/globals.css";

import SideMenu from '$/Components/SideMenu/SideMenu';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return(
        <div className="flex min-h-screen">
            <aside className="fixed sm:static top-0 left-0 z-40 w-64 transition-transform -translate-x-full sm:translate-x-0 ">
                <SideMenu/>
            </aside>
            <div className="flex flex-1 p-6 justify-center">
                { children }
            </div>
        </div>    
    );
}