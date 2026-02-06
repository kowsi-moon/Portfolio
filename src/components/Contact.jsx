import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // YOUR CREDENTIALS
    const SERVICE_ID = "service_e73srv9"; // Find this in Email Services tab
    const TEMPLATE_ID = "template_kpt3ctk";
    const PUBLIC_KEY = "LqjZn4AbukHHJiXhJ";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          console.log("Success:", result.text);
          alert("Thank you! Your message has been sent to Kowsalya.");
          e.target.reset(); // This clears the form after sending
      }, (error) => {
          console.log("Error:", error.text);
          alert("Failed to send message. Please check your Service ID.");
      });
  };

  return (
    <div className="bg-[#e9dfd4] min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        
        <div className="flex items-center justify-center gap-3 mb-12">
          <div className="w-4 h-4 bg-blue-600" />
          <h1 className="text-4xl font-bold text-black font-sans uppercase tracking-tight">Let's talk</h1>
        </div>

        <div className="bg-white shadow-xl max-w-2xl mx-auto p-10 md:p-16">
          <form ref={form} onSubmit={sendEmail} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* First Name */}
              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-2">First Name *</label>
                <input 
                  name="first_name" 
                  type="text" 
                  className="border-b border-black py-2 focus:outline-none focus:border-blue-600 transition-colors" 
                  required 
                />
              </div>
              {/* Last Name */}
              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-2">Last Name *</label>
                <input 
                  name="last_name" 
                  type="text" 
                  className="border-b border-black py-2 focus:outline-none focus:border-blue-600 transition-colors" 
                  required 
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-2">Email *</label>
              <input 
                name="email" 
                type="email" 
                className="border-b border-black py-2 focus:outline-none focus:border-blue-600 transition-colors" 
                required 
              />
            </div>

            {/* Subject */}
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-2">Subject</label>
              <input 
                name="subject" 
                type="text" 
                className="border-b border-black py-2 focus:outline-none focus:border-blue-600 transition-colors" 
              />
            </div>

            {/* Message */}
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-2">Message</label>
              <textarea 
                name="message" 
                rows="4" 
                className="border-b border-black py-2 focus:outline-none focus:border-blue-600 transition-colors resize-none"
              ></textarea>
            </div>

            {/* Send Button */}
            <div className="pt-4">
              <button 
                type="submit" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-10 py-3 rounded-full transition-all shadow-md active:scale-95"
              >
                Send
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}