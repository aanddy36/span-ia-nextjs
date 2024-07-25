import type { Metadata } from "next";
import "@radix-ui/themes/styles.css";
import { ReactNode } from "react";

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
    
  return (
    <html lang="en">
      {children}
    </html>
  );
}
