import LinkButtons from "$/Components/Buttons/LinkButtons";

export default function SideMenu() {
    return (
        <div className="fixed top-[10px] left-[10px] bottom-[10px] w-64 p-6 border-4 border-[#1c1d20] bg-[#111214] text-white flex flex-col justify-between rounded-lg">
            {/* Top navigation */}
            <nav className="flex flex-col space-y-4">
                <LinkButtons href="/dashboard" text="Home" />
                <LinkButtons href="/live" text="Live Target" />
                <LinkButtons href="/results" text="Results" />
                <LinkButtons href="/vps" text="VPS Management" />
                <LinkButtons href="/pages" text="Pages Management" />
                <br />
                <hr className="border-2 border-[#1c1d20]" />
                <LinkButtons href="/account" text="Account Settings" />
                <LinkButtons href="/logout" text="Logout" />
            </nav>
        </div>
    );
}
