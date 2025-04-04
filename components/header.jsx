import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs"
import Link from "next/link"
import Image from "next/image"

const Header = () => {
  return (
    <div className="fixed top-0 w-full bg-black/90 backdrop-blur-md z-50 border-b">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
        <Image
            src={"/Logo.png"}
            alt="Jokkos Logo"
            height={1000}
            width={1000}
            className="h-15 w-auto object-contain"
          />
        </Link>
        
        <SignedOut>
            <SignInButton mode="modal" forceRedirectUrl="/dashboard"
            className="px-4 py-2 bg-white text-black rounded hover:bg-gray-500 hover:text-white transition duration-300 ease-in-out"
            >Login</SignInButton>
        </SignedOut>
        <SignedIn>
            <UserButton />
        </SignedIn>
    </nav>
    </div>
  )
}
export default Header

{/* <div className="container mx-auto px-4 text-white text-center">
             <h1 className="text-4xl font-bold">JOKKOS</h1>
             <p className="text-lg">Financial management for everyday life</p>
           </div> */}