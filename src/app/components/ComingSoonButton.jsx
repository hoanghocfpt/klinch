'use client'
import { useState } from "react";
import JoinWaitlistModal from "./JoinWaitlistModal";

export default function ComingSoonButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 sm:px-16 py-4 inline-block bg-[#3336e8] text-center text-white text-sm sm:text-xl rounded-lg"
      >
        Coming Soon
      </button>

      <JoinWaitlistModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
