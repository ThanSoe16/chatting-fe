import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import "@radix-ui/themes/styles.css";
import { cn } from "@/lib/utils";
import Providers from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chatting App",
  description: "Testing App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          "relative items-start max-w-[480px] m-auto overflow-hidden bg-gray-100"
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
