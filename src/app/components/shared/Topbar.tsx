import Image from "next/image";
import Link from "next/link";
import { SignedIn, SignOutButton,OrganizationSwitcher } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";
export default function TopBar(){

  return(
    <nav className="topbar">
      <Link href="/" className="flex items-center gap-4">
        <Image src="@/public/logo.svg" alt="logo" width={28} height={28}></Image>
        <p className="text-heading3-bold text-light-1 max-xs:hidden">Threads</p>
      </Link>

      <div className="flex items-center gap-1">
        
        {/* Logout Button */}
        <div className="block md:hidden">
          <SignedIn>
            <SignOutButton redirectUrl="sign-in">
              <div className="flex text-light-1 cursor-pointer">
                Logout
                <Image src="@/public/logout.svg" alt="logout" height={28} width={28}></Image>
              </div>
            </SignOutButton>
            
          </SignedIn>
        </div>

        <OrganizationSwitcher
          appearance={{
            elements:{ 
              organizationSwitcherTrigger:"py-2 px-4"
            }
          }}
        />
        <UserButton/>
      </div>
    </nav>
  )
}