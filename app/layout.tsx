import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Providers from "@/components/Providers";

export const metadata: Metadata = {
  title: "GANCHO TOKEN",
  description: "GANCHO TOKEN - Empire of Gancho",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
