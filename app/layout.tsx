import type { Metadata } from "next";
import { Montserrat as FontSans } from "next/font/google";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { site } from "@/config";
import Header from "@/components/shared/header";
import { Web3Modal } from "@/context/web3modal";
import Footer from "@/components/landing/footer";
import { Toaster } from "@/components/ui/sonner";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: `${site.name} - ${site.short}`,
  description: site.desc,
  icons: {
    icon: "/svg/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Web3Modal>
      <html lang="en" suppressContentEditableWarning suppressHydrationWarning>
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased flex flex-col",
            fontSans.variable
          )}>
          <Toaster richColors />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </body>
      </html>
    </Web3Modal>
  );
}
