import { Bodoni_Moda } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";

const bodoni = Bodoni_Moda({subsets: ["latin"]});
export const metadata = {
  title: "JOKKOS",
  description: "Financial management for everyday life",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${bodoni.className}`}>
         {/* header */} 
           <Header />
         {/* main content */}
         <main className="min-h-screen"> 
         {children}
         </main>
         {/* footer */}
         <footer className="bg-black py-5">
           <div className="container mx-auto px-4 text-white text-center"><p>&copy; 2025 JOKKOS. All rights reserved.</p></div>
           </footer>
      </body>
    </html>
    </ClerkProvider>
  );
}
