"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { ReactNode } from "react";
import { StorageProvider } from "@/context/StorageContext";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider>
      <StorageProvider>
        {children}
      </StorageProvider>
    </ClerkProvider>
  );
}

