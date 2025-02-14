"use client"

import React from "react";
import Navbar from "../../components/Navbar";
import Image from 'next/image';

const AboutPage = () => {
  return (
    <div style={{
      background:
        "radial-gradient(52.52% 32.71% at 50% 97.66%, rgba(36, 160, 181, 0.20) 0%, rgba(36, 160, 181, 0.00) 100%), #02191D",
    }} className="min-h-screen text-white p-8">
      <Navbar />

      <div className="max-w-3xl mx-auto border border-[#197686] rounded-lg p-8">
      <header className="md:flex items-center mb-12 gap-2">
        <h1 className="font-bold">Event Ticket Booking UI</h1>
        <p className="">Open Source Practice Project for Developers</p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl mb-4">Overview</h2>
        <p className="text-gray-300 mb-4">
          This is a beginner-friendly yet practical Event Ticket Booking UI designed for developers to clone, explore, and build upon. The design focuses on a seamless, login-free ticket reservation flow, allowing users to book event tickets quickly and efficiently.
        </p>
        <p className="text-gray-300">
          The project consists of a three-step ticket booking flow, and developers can extend it further by integrating payment solutions, user authentication (optional), and ticket validation systems.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl mb-4">Flow & Features</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Ticket Selection</h3>
            <div className="text-gray-300">
              <ul className="md:list-disc list-inside text-gray-300">
                <li>Users can browse available tickets (Free & Paid).</li>
                <li>Ticket options are displayed in a list or card view.</li>
                <li>For Free Tickets → Clicking “Get Free Ticket” proceeds to attendee details.</li>
                <li>For Paid Tickets → Clicking “Purchase Ticket” would ideally open a payment modal.</li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Attendee Details Form</h3>
            <div className="text-gray-300">
              <ul className="md:list-disc list-inside text-gray-300">
                <li>Users input their Name, Email, and optional Phone Number.</li>
                <li>Profile picture upload option with preview functionality.</li>
                <li>Ticket summary is visible to ensure users review their details before submission.</li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Payment or Success Page</h3>
            <div className="text-gray-300">
              <ul className="md:list-disc list-inside text-gray-300">
                <li>If the ticket is free, the user is taken directly to the Ticket Confirmation Page.</li>
                <li>If the ticket is paid, developers can integrate Stripe, Paystack, or Flutterwave to process payments before showing the confirmation page.</li>
                <li>Upon successful booking, users should receive:</li>
                <li>A visual ticket preview with a unique QR Code.</li>
                <li>An option to download the ticket as PDF or save it to their device.</li>
                <li>An email confirmation containing ticket details.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">How to Build This</h2>
        <p className="">This UI can be implemented using:</p>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Frontend (Next.js or React)</h3>
            <div className="text-gray-300">
              <ul className="md:list-disc list-inside text-gray-300">
                <li>Component Breakdown:</li>
                <li>TicketCard.tsx → Displays ticket details</li>
                <li>AttendeeForm.tsx → Captures user details</li>
                <li>PaymentModal.tsx → Handles payment processing</li>
                <li>SuccessScreen.tsx → Shows the final ticket preview</li>
                <li>State Management: React&quot;s Context API, Zustand, or Redux (if needed).</li>
                <li>File Handling: Users should be able to upload images (profile picture for ticket) using Firebase Storage, Cloudinary, or local preview with URL.createObjectURL().</li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Backend (Optional)</h3>
            <div className="text-gray-300">
              <ul className="md:list-disc list-inside text-gray-300">
                <li>If persistence is required, a backend can be built using:</li>
                <li>Node.js & Express or Firebase Functions</li>
                <li>Database: MongoDB, PostgreSQL, or Firebase Firestore</li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Payment Integration</h3>
            <div className="text-gray-300">
              <ul className="md:list-disc list-inside text-gray-300">
                <li>For paid events, developers should integrate:</li>
                <li>Stripe Checkout (for international transactions)</li>
                <li>Paystack or Flutterwave (for African users)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">What You&quot;ll Learn</h2>
        <ul className="md:list-disc list-inside text-gray-300">
          <li>File handling & validation (profile picture uploads).</li>
          <li>Dynamic UI updates based on ticket selection.</li>
          <li>Persisting bookings using local state or a backend.</li>
          <li>Integrating payment gateways for ticket purchases.</li>
          <li>Generating & validating QR Codes for event check-in.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Need Help? Reach Out!</h2>
        <p className="text-gray-300">
          If you have any questions or need assistance, feel free to reach out to us.
        </p>
      </section>
      <div className="flex justify-center text-center mb-3">
        <Image src="/enjoy.png" alt="Logo" width={200} height={100} />
        </div>

      <div className="text-center text-gray-400 border border-[#197686] rounded-md md:w-2/3 mx-auto p-4 flex gap-3 justify-center">
        <a href="https://www.figma.com/design/GqUEg26IAJH1Q4WhteDdMO/Event-Ticket-Booking-UI-%E2%80%93-Open-Source-Practice-Project-%F0%9F%8E%9F%EF%B8%8F-(Community)?node-id=0-1&p=f&t=ferB4peixW7HD3rd-0" className="">
        <button className="border border-[#197686] text-[#24A0B5] md:px-8 p-2 rounded-md">Design File</button>
        </a>
        <a href="https://github.com/elizabeth-agada/hngx-stage2-ticketer" className="">
        <button className="border border-[#197686] bg-[#24A0B5] text-[#FFFFFF] md:px-8 p-2 rounded-md">GitHub Code</button>
        </a>
      </div>
      </div>
    </div>
  );
};

export default AboutPage;


