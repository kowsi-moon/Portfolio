import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-10 px-6 mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-800">
        <div>
          <p>© 2026 by Kowsalya.</p>
          <p>Built with React & Tailwind</p>
        </div>
        <div className="flex gap-12">
          <div><p className="font-bold">Call</p><p>8015686820</p></div>
          <div><p className="font-bold">Write</p><p>jkowsalya2005@gmail.com</p></div>
        </div>
      </div>
    </footer>
  );
}