import { Link } from "react-router";
import LinkButtons from "$/Components/Buttons/LinkButtons";

export default function SideMenu(){
    return(
        <aside className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0">
            <div className="items-center fixed w-65 h-100% p-6 center border-4 border-[#1c1d20] bg-[#111214] text-white transition-all duration-500">
                <nav className="h-screen w-50 text-white flex flex-col ">
                    <ul >
                        <li>
                            <LinkButtons href="/dashboard" text="Home"/>
                        </li>
                        <li>
                            <LinkButtons href="/live" text="Live Target"/>
                        </li>
                        <li>
                            <LinkButtons href="/results" text="Results"/>
                        </li>
                        <li>
                            <LinkButtons href="/vps" text="VPS Management"/>
                        </li>
                        <li>
                            <LinkButtons href="/pages" text="Pages Management"/>
                        </li>
                        <li>
                            <LinkButtons href="/account" text="Account Settings"/>
                        </li>
                        <li>
                            <LinkButtons href="/logout" text="Logout"/>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    );
}