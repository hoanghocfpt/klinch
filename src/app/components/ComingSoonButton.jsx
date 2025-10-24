'use client'
import { useState } from "react";
import JoinWaitlistModal from "./JoinWaitlistModal";

export default function ComingSoonButton() {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <a
        // onClick={() => setIsOpen(true)}
        className="px-4 sm:px-16 py-4 inline-block bg-[#3336e8] text-center text-white text-sm sm:text-xl rounded-lg"
        href="https://t.me/klinchrefund_bot"
        target="_blank"
        rel="noopener noreferrer"
      >
        Get Refund Help
      </a>

      {/* <JoinWaitlistModal isOpen={isOpen} onClose={() => setIsOpen(false)} /> */}
    </>
  );
}
