import SideMenu from "$/Components/SideMenu/SideMenu"

export default function Dashboard(){
    return(
        // <script>
        //     window.location.replace("/login")
        // </script>
        <>
        <div>
            <SideMenu/>
        </div>
            <div>
                <div className="grid-cols-3 gap-15 h-top mt-20 flex items-center justify-center">
                    <div className="p-25 border-4 border-[#1c1d20] bg-[#111214] rounded-lg">
                        <label>Number of Results:</label>
                    </div>
                    <div className="p-25 border-4 border-[#1c1d20] bg-[#111214] rounded-lg">
                        <label>Current Live Visitors:</label>
                    </div>
                    <div className="p-25 border-4 border-[#1c1d20] bg-[#111214] rounded-lg">
                        <label>Active pages:</label>
                    </div>
                </div>
            </div>
        </>
    );
}