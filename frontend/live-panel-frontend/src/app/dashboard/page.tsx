import Link from "next/link"

export default function Dashboard() {
    return (
        <div className="flex mt-20 px-4">
            <div className="flex flex-wrap justify-center gap-8">
                <div className="min-w-[350px] max-w-[350px] h-[230px] flex items-center justify-center border-4 border-[#1c1d20] bg-[#111214] rounded-lg mx-auto text-white">
                    <label>Number of Results:</label>
                </div>
                <div className="min-w-[350px] max-w-[350px] h-[230px] flex items-center justify-center border-4 border-[#1c1d20] bg-[#111214] rounded-lg mx-auto text-white">
                    <label>Current Live Visitors:</label>
                </div>
                <div className="min-w-[350px] max-w-[350px] h-[230px] flex items-center justify-center border-4 border-[#1c1d20] bg-[#111214] rounded-lg mx-auto text-white">
                    <label>Active pages:</label>
                </div>
            </div>
        </div>
    );
}
