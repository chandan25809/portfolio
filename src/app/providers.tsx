"use client";

import { FloatingLabAssistant } from "@/components/FloatingLabAssistant";
import { MinecraftShell } from "@/components/world/MinecraftShell";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MinecraftShell>{children}</MinecraftShell>
      <FloatingLabAssistant />
    </>
  );
}
