"use client";

import Link from "next/link";
import { RESUME_PDF_HREF } from "@/data/career";

export function ResumeActions() {
  return (
    <div className="flex flex-wrap gap-2 justify-end">
      <button type="button" className="btn-journal text-xs py-2 px-3" onClick={() => window.print()}>
        Print
      </button>
      <Link
        href={RESUME_PDF_HREF}
        target="_blank"
        className="btn-journal-primary text-xs py-2 px-3 inline-flex items-center justify-center"
        download
      >
        Download PDF
      </Link>
    </div>
  );
}
