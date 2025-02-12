import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="bg-[#02191D] min-h-screen text-white ">
       <Navbar />

      
      <div className="w-full max-w-lg p-6 rounded-3xl border border-[#162b36] mx-auto mt-32 shadow-lg">
       
       <div className="flex justify-between">
        <h2 className="">Ticket Selection</h2>
        <span className="">Step 1/3</span>
        </div>

        <div className="space-y-6 mt-6">
        <div className="text-center mb-6 items-center rounded-2xl border border-[#162b36] p-6">
          <h3 className="text-2xl font-bold text-[#FAFAFA]">Techember Fest "25</h3>
          <p className="text-sm text-gray-400 w-2/3 mx-auto">
            Join us for an unforgettable experience at [Event Name]! Secure your spot now.
          </p>
          <p className="mt-2 text-gray-300">
            📍 [Event Location] | March 15, 2025 | 7:00 PM
          </p>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg">Select Ticket Type:</h3>
          <div className="flex gap-4 mt-2">
            <button className=" p-4 bg-[#02191D] rounded-md border border-gray-500">Free <br /><span className="text-xs">REGULAR ACCESS</span></button>
            <button className="flex-1 p-4 bg-[#02191D] rounded-md border border-gray-500 text-center">$150 <br /><span className="text-xs">VIP ACCESS</span></button>
            <button className="flex-1 p-4 bg-[#02191D] rounded-md border border-gray-500 text-center">$150 <br /><span className="text-xs">VVIP ACCESS</span></button>
          </div>
        </div>
        
        <div className="mb-6">
          <label className="block mb-1">Number of Tickets</label>
          <select className="w-full p-2 bg-gray-700 bg-transparent rounded-md border-[#24A0B5]">
            {[...Array(10).keys()].map(n => <option key={n}>{n + 1}</option>)}
          </select>
        </div>
        
        <div className="flex justify-between gap-2 ">
          <button className="p-2 w-full rounded-md border border-[#24A0B5]">Cancel</button>
          <button className="p-2 w-full bg-[#24A0B5] rounded-md border border-[#24A0B5]">Next</button>
        </div>
        </div>
      </div>
    </div>
  
  );
}