"use client";

import { useEffect, useState } from "react";
import { ChatPanel } from "./ChatPanel";

const OPEN_QUILL = "portfolio:open-quill";

export function FloatingLabAssistant() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener(OPEN_QUILL, onOpen);
    return () => window.removeEventListener(OPEN_QUILL, onOpen);
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-[5.25rem] sm:bottom-[5.75rem] right-3 sm:right-6 z-50 flex max-w-[10.5rem] flex-col gap-0.5 rounded-xl border-[3px] border-[#2c1810] bg-[#3d9644] px-3 py-2.5 text-left font-mono text-[11px] font-semibold leading-snug text-[#fdfef8] shadow-[5px_5px_0_#1f120c] transition-transform hover:-translate-y-0.5 hover:brightness-105 active:translate-y-0"
        aria-label="Open Quill villager chat"
      >
        <span className="flex items-center gap-1.5">
          <span aria-hidden>📖</span>
          <span>Villager Quill</span>
        </span>
        <span className="opacity-90 font-normal text-[10px] font-mono">
          Ask Quill · career facts
        </span>
      </button>
      <ChatPanel open={open} onClose={() => setOpen(false)} />
    </>
  );
}
