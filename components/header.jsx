import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs"
import Link from "next/link"
import Image from "next/image"
import { Button } from "./ui/button"
import { LayoutDashboard, PenBox, PenBoxIcon } from "lucide-react"
import { checkUser } from "@/lib/checkUser"

const Header = async () => {
  await checkUser();
  
  return (
    <div className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b">
      <nav className="container mx-auto px-2 sm:px-4 py-2 sm:py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2 sm:space-x-4">
          <Link href="/">
            <Image
              src={"/Logo.png"}
              alt="Jokkos Logo"
              height={100}
              width={100}
              className="h-10 sm:h-15 w-auto object-contain"
            />
          </Link>
          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl font-bold text-white">JOKKOS</h1>
        </div>
        <div className="flex items-center space-x-2 sm:space-x-4">
          <SignedIn>
            <Link href={"/dashboard"}>
              <Button
                variant="outline"
                className="px-4 py-2 bg-white text-black rounded hover:bg-gray-500 hover:text-white 
                flex items-center gap-2 transition duration-300 ease-in-out"
              >
                <LayoutDashboard size={18} />
                <span className="hidden md:inline">Dashboard</span>
              </Button>
            </Link>

            <Link href={"/transaction/create"}>
              <Button
                variant="outline"
                className="px-4 py-2 bg-white text-black rounded hover:bg-gray-500 hover:text-white 
                flex items-center gap-2 transition duration-300 ease-in-out"
              >
                <PenBoxIcon size={18} />
                <span className="hidden md:inline">Add Transaction</span>
              </Button>
            </Link>
          </SignedIn>

          <SignedOut>
            <SignInButton
              mode="modal"
              forceRedirectUrl="/dashboard"
              className="px-4 py-2 bg-white text-black rounded hover:bg-gray-500 hover:text-white transition duration-300 ease-in-out"
            >
              Login
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10", // Adjusted size to better match the button
                },
              }}
            />
          </SignedIn>
        </div>
      </nav>
    </div>
  );
};
export default Header;