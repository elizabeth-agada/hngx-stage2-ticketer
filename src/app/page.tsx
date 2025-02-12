"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";

export default function Home() {
  const [step, setStep] = useState(1);

  return (
    <div className="bg-[#02191D] min-h-screen text-white">
      <Navbar />

      <div className="w-full max-w-lg p-6 rounded-3xl border border-[#162b36] bg-[#02191D] mx-auto mt-32 shadow-lg">
        <div className="flex justify-between">
          <h2>
            {step === 1
              ? "Ticket Selection"
              : step === 2
              ? "Attendee Details"
              : "Your Ticket is Booked!"}
          </h2>
          <span>Step {step}/3</span>
        </div>

        {step === 1 && (
          <div className="space-y-6 mt-6 border border-[#162b36] pt-6 pb-6 px-6 rounded-2xl">
            <div className="text-center mb-6 items-center rounded-2xl border border-[#162b36] bg-[#041E23] opacity-95 p-6">
              <h3 className="text-2xl font-bold text-[#FAFAFA]">Techember Fest "25</h3>
              <p className="text-sm text-gray-400 w-2/3 mx-auto">
                Join us for an unforgettable experience at [Event Name]! Secure your spot now.
              </p>
              <p className="mt-2 text-gray-300">
                [Event Location] | March 15, 2025 | 🕖 7:00 PM
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg">Select Ticket Type:</h3>
              <div className="flex gap-4 mt-2 border border-[#162b36] rounded-2xl pt-2 pb-2 px-4">
                <button className="p-4 bg-[#12464E] rounded-xl border border-gray-500">Free <br /><span className="text-xs">REGULAR ACCESS</span></button>
                <button className="flex-1 p-4 bg-[#02191D] rounded-xl border border-gray-500 text-center">$150 <br /><span className="text-xs">VIP ACCESS</span></button>
                <button className="flex-1 p-4 bg-[#02191D] rounded-xl border border-gray-500 text-center">$150 <br /><span className="text-xs">VVIP ACCESS</span></button>
              </div>
            </div>

            <div className="mb-6">
              <label className="block mb-1">Number of Tickets</label>
              <select className="w-full p-2 bg-[#041E23] bg-transparent rounded-md border-[#24A0B5]">
                {[...Array(10).keys()].map(n => <option key={n}>{n + 1}</option>)}
              </select>
            </div>

            <div className="flex justify-between gap-2">
              <button className="p-2 w-full rounded-md border border-[#24A0B5]">Cancel</button>
              <button onClick={() => setStep(2)} className="p-2 w-full bg-[#24A0B5] rounded-md border border-[#24A0B5]">Next</button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6 mt-6 border border-[#162b36] pt-6 pb-6 px-6 rounded-2xl">
            <div className="text-center mb-6 items-center rounded-2xl border border-[#162b36] bg-[#041E23] opacity-95 p-6">
              <h3 className="text-2xl font-bold text-[#FAFAFA]">Attendee Details</h3>
            </div>

            <div className="mb-6">
              <label className="block mb-1">Upload Profile Photo</label>
              <div className="w-full h-32 border border-[#24A0B5] rounded-md flex items-center justify-center">
                <span className="text-gray-400">Drag & drop or click to upload</span>
              </div>
            </div>

            <div className="mb-6">
              <label className="block mb-1">Enter your name</label>
              <input type="text" className="w-full p-2 bg-[#041E23] rounded-md border-[#24A0B5]" />
            </div>

            <div className="mb-6">
              <label className="block mb-1">Enter your email *</label>
              <input type="email" className="w-full p-2 bg-[#041E23] rounded-md border-[#24A0B5]" placeholder="hello@aviotlagos.io" />
            </div>

            <div className="mb-6">
              <label className="block mb-1">Special Request?</label>
              <textarea className="w-full p-2 bg-[#041E23] rounded-md border-[#24A0B5]" placeholder="Textarea"></textarea>
            </div>

            <div className="flex justify-between gap-2">
              <button onClick={() => setStep(1)} className="p-2 w-full rounded-md border border-[#24A0B5]">Back</button>
              <button onClick={() => setStep(3)} className="p-2 w-full bg-[#24A0B5] rounded-md border border-[#24A0B5]">Get My Free Ticket</button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="text-center p-6 bg-[#041E23] rounded-2xl border border-[#162b36]">
            <h2 className="text-xl font-bold text-[#FAFAFA]">Your Ticket is Booked!</h2>
            <p className="text-gray-400">Check your email for a copy or you can download it now.</p>

            <div className="mt-6 bg-[#02191D] p-6 rounded-lg border border-[#24A0B5]">
              <h3 className="text-lg font-semibold">Techember Fest "25</h3>
              <p className="text-gray-300">8 Runners Road, Ikoyi, Lagos</p>
              <p className="text-gray-300">March 15, 2025 | 7:00 PM</p>

              <div className="mt-4 p-4 bg-[#041E23] border border-gray-500 rounded-lg">
                <p className="text-gray-300">Avi Chukwu</p>
                <p className="text-gray-300">user@email.com</p>
                <p className="text-gray-300">Ticket Type: VIP</p>
                <p className="text-gray-300">Tickets: 1</p>
                <p className="text-gray-300">Special Request: N/A</p>
              </div>

              <div className="mt-4 bg-white text-black font-mono text-lg py-2 px-4 rounded-lg">
                234567 891026
              </div>
            </div>

            <div className="flex justify-between gap-4 mt-6">
              <button onClick={() => setStep(1)} className="p-2 w-full rounded-md border border-[#24A0B5]">Book Another Ticket</button>
              <button className="p-2 w-full bg-[#24A0B5] rounded-md border border-[#24A0B5]">Download Ticket</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
