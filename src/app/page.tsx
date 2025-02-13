"use client"

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Navbar from "../components/Navbar";

const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  avatarUrl: z.string().url("Please provide a valid image URL").optional(),
  ticketType: z.enum(["FREE", "VIP", "VVIP"]),
  numberOfTickets: z.number().min(1).max(10),
  specialRequest: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const CLOUDINARY_CLOUD_NAME = "dffjikv5f";
const CLOUDINARY_UPLOAD_PRESET = "Lizian";

export default function Home() {
  const [step, setStep] = useState(1);
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);
  const totalSteps = 3;

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ticketType: "FREE",
      numberOfTickets: 1,
    },
  });

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      setValue("avatarUrl", data.secure_url);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const onSubmit = (data: FormData) => {
    setSubmittedData(data);
    setStep(3);
  };

  return (
    <div
      style={{
        background:
          "radial-gradient(52.52% 32.71% at 50% 97.66%, rgba(36, 160, 181, 0.20) 0%, rgba(36, 160, 181, 0.00) 100%), #02191D",
      }}
      className="min-h-screen text-white px-4 pb-8">
      <Navbar />

      <div className="w-full max-w-lg p-4 sm:p-6 rounded-3xl border border-[#162b36] bg-[#02191D] mx-auto mt-20 sm:mt-32 shadow-lg">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
          <h2 className="text-xl">
            {step === 1
              ? "Ticket Selection"
              : step === 2
              ? "Attendee Details"
              : "Ready"}
          </h2>
          <span className="text-sm">Step {step}/3</span>
          
        </div>
        <div className="relative w-full bg-gray-700 h-2 rounded-md overflow-hidden">
          <div
            className="absolute top-0 left-0 h-10 bg-[#24A0B5] transition-all duration-300"
            style={{ width: `${(step / totalSteps) * 100}%` }}
          ></div>
        </div>

        {step === 1 && (
          <div className="space-y-4 sm:space-y-6 mt-4 sm:mt-6 border border-[#162b36] p-4 sm:p-6 rounded-2xl">
            <div className="text-center mb-4 sm:mb-6 items-center rounded-2xl border border-[#162b36] bg-[#041E23] opacity-95 p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-bold text-[#FAFAFA]">
                Techember Fest &quot;25
              </h3>
              <p className="text-sm text-gray-400 w-full sm:w-2/3 mx-auto mt-2">
                Join us for an unforgettable experience! Secure your spot now.
              </p>
              <p className="mt-2 text-gray-300 text-sm">
                [Event Location] | March 15, 2025 | 🕖 7:00 PM
              </p>
            </div>

            <div className="mb-4 sm:mb-6">
              <h3 className="text-lg">Select Ticket Type:</h3>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-2 border border-[#162b36] rounded-2xl p-4">
                {["FREE", "VIP", "VVIP"].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setValue("ticketType", type as any)}
                    className={`p-3 sm:p-4 rounded-xl border border-gray-500 ${
                      watch("ticketType") === type
                        ? "bg-[#12464E]"
                        : "bg-[#02191D]"
                    }`}
                  >
                    {type === "FREE" ? "Free" : "$150"}
                    <br />
                    <span className="text-xs">{type} ACCESS</span>
                  </button>
                ))}
              </div>
              {errors.ticketType && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.ticketType.message}
                </p>
              )}
            </div>

            <div className="mb-4 sm:mb-6">
              <label className="block mb-1">Number of Tickets</label>
              <select
                {...register("numberOfTickets", { valueAsNumber: true })}
                className="w-full p-2 bg-[#041E23] rounded-md border-[#24A0B5]"
              >
                {[...Array(10)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col-reverse sm:flex-row justify-between gap-2">
              <button
                className="order-1 sm:order-2 p-2 w-full rounded-md border border-[#24A0B5]"
              >
                Cancel
              </button>
              <button
                onClick={() => setStep(2)}
                className="order-1 sm:order-2 p-2 w-full bg-[#24A0B5] rounded-md border border-[#24A0B5]"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <form style={{
            background:
            "radial-gradient(52.52% 32.71% at 50% 97.66%, rgba(36, 160, 181, 0.20) 0%, rgba(36, 160, 181, 0.00) 100%), #08252B",
            }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 sm:space-y-6 mt-4 sm:mt-6 border border-[#162b36] p-4 sm:p-6 rounded-2xl">
            <div className=" mb-4 sm:mb-6 items-center rounded-2xl p-4 sm:p-6">
              <label className="block mb-1">Upload Profile Photo</label>
            <div 
                className="w-full h-32 rounded-md flex items-center bg-[#041E23] justify-center cursor-pointer relative"
                >
                   <div
                className=" border-2 border-[#24A0B5] bg-[#0E464F] h-full rounded-2xl flex items-center justify-center cursor-pointer relative"
                onClick={() => document.getElementById("imageUpload")?.click()}>
                {watch("avatarUrl") ? (
                  <img
                    src={watch("avatarUrl")}
                    alt="Profile"
                    className="w-full h-full object-cover rounded-md"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center gap-2">
                    <img
                      src="/img/cloud-download.png"
                      alt="Upload Icon"
                      className="w-10 h-10"
                    />
                    <span className="text-gray-400 text-sm text-center px-4">
                      Drag & drop or click to upload
                    </span>
                  </div>
                  
                
                )}
                <input
                  id="imageUpload"
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </div>
              </div>
            </div>

            

            <div className="mb-4 sm:mb-6">
              <label className="block mb-1">Enter your name</label>
              <input
                {...register("fullName")}
                type="text"
                className="w-full p-2 bg-[#041E23] rounded-lg border border-[#07373F]"
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            <div className="mb-4 sm:mb-6">
              <label className="block mb-1">Enter your email *</label>
              <input
                {...register("email")}
                type="email"
                className="w-full p-2 bg-[#041E23] rounded-lg border border-[#07373F]"
                placeholder="hello@aviotlagos.io"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div className="mb-4 sm:mb-6">
              <label className="block mb-1">Special Request?</label>
              <textarea
                {...register("specialRequest")}
                className="w-full p-2 bg-[#041E23] rounded-lg border border-[#07373F]"
                placeholder="Textarea"
              />
            </div>

            <div className="flex flex-col-reverse sm:flex-row justify-between gap-2">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="order-1 sm:order-2 p-2 w-full rounded-md border border-[#24A0B5]"
            >
              Back
            </button>
            <button
              type="submit"
              className="order-1 sm:order-2 p-2 w-full bg-[#24A0B5] rounded-md border border-[#24A0B5]"
            >
              Get My Free Ticket
            </button>
          </div>
          </form>
        )}

        {step === 3 && submittedData && (
          <div className="text-center p-4 sm:p-6 bg-[#02191D] rounded-3xl">
            <h1 className="text-2xl font-bold text-white mb-4">
              Your Ticket is Booked!
            </h1>
            <p className="text-gray-400 text-sm mb-8">
              Check your email for a copy or you can <span className="text-[#FAFAFA]">download</span>
            </p>

            <div style={{
              background:
              "radial-gradient(52.52% 32.71% at 50% 97.66%, rgba(36, 160, 181, 0.20) 0%, rgba(36, 160, 181, 0.00) 100%), #072C31",
              }}  className="rounded-xl overflow-hidden border border-[#24A0B5]/30 p-5 ticket-border">
              <div className="relative">
                <div style={{
                  background:
                  "radial-gradient(52.52% 32.71% at 50% 97.66%, rgba(36, 160, 181, 0.20) 0%, rgba(36, 160, 181, 0.00) 100%), #072C31",
                  }} 
                  className="p-6 rounded-2xl border border-[#24A0B5]/30 backdrop-blur-sm">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Techember Fest &quot;25
                  </h3>
                  
                  <div className="flex justify-center items-center gap-2 text-gray-400 text-sm mb-4">
                    <span>04 Rumens road, Ikoyi, Lagos</span>
                  </div>
                  
                  <div className="flex justify-center items-center gap-2 text-gray-400 text-sm mb-6">
                    <span>March 15, 2025 | 7:00 PM</span>
                  </div>

                  <div className="w-full h-32 mx-auto mb-6 rounded-xl overflow-hidden border border-[#24A0B5]/30">
                    {submittedData.avatarUrl ? (
                    <img
                      src={submittedData.avatarUrl}
                      alt="Profile"
                      className="w-full h-full object-cover"/>
                        ) : (
                    <div className="w-full h-full bg-[#02191D] flex items-center justify-center">
                      <span className="text-[#24A0B5]">No Image</span>
                    </div>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-left mb-6">
                    <div>
                      <p className="text-gray-400 text-xs mb-1">Enter your name</p>
                      <p className="text-white">{submittedData.fullName}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs mb-1">Enter your email *</p>
                      <p className="text-white">{submittedData.email}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs mb-1">Ticket Type</p>
                      <p className="text-white">{submittedData.ticketType}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs mb-1">Ticket for :</p>
                      <p className="text-white">{submittedData.numberOfTickets}</p>
                    </div>
                  </div>

                  {submittedData.specialRequest && (
                    <div className="text-left mb-6">
                      <p className="text-gray-400 text-xs mb-1">Special request?</p>
                      <p className="text-white text-sm">{submittedData.specialRequest}</p>
                    </div>
                  )}

                </div>
            
              </div>
            </div>

            <div className="ticket-border p-6 bg-[#072C31] text-white">
            <div className="pt-2 border-[#24A0B5]/30">
                <img src="/img/barcode.png" alt="" className="mx-auto" />
              </div>
            </div>
          

      
            <div className="flex flex-col-reverse sm:flex-row gap-4 mt-8">
              <button
                onClick={() => setStep(1)}
                className="order-2 sm:order-1 py-3 px-6 w-full rounded-xl border border-[#24A0B5] text-[#24A0B5] hover:bg-[#24A0B5]/10 transition-colors"
              >
                Book Another Ticket
              </button>
              <button
                className="order-2 sm:order-1 py-3 px-6 w-full bg-[#24A0B5] rounded-xl text-white hover:bg-[#1b8094] transition-colors"
              >
                Download Ticket
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}