"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import "normalize.css";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();

  useEffect(() => {
    const pathname = location.pathname;
    const load = async () => {
      const response = await fetch("http://localhost:3000/api/auth", {
        method: "GET",
        credentials: "include",
      });
      if (
        !response.ok &&
        !(pathname === "/signin" || pathname === "/checkout")
      ) {
        router.push("/signin");
      }
    };
    load();
  }, []);

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
