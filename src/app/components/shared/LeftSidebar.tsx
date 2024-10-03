'use client'
import { sidebarLinks } from "@/app/constants"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { SignedIn, SignOutButton } from "@clerk/nextjs"
// import { useRouter } from "next/router"
export default function LeftSidebar(){
  // const router = useRouter()
  const pathName = usePathname()
  return(
    <section className="custom-scrollbar leftsidebar">
      <div className="flex w-ful flex-1 flex-col gap-6">
        {sidebarLinks.map((link)=>{
          const isActive = (pathName.includes(link.route) && link.route.length > 1 ) || pathName === link.route
          return(
            <Link href={link.route} key={link.label} className={`leftsidebar_link ${isActive && 'bg-primary-500'}`}>
              <Image src={link.imgURL} alt="" width={24} height={24}>
              </Image>
              <p className="text-light-1 max-lg:hidden">{link.label}</p>
            </Link>
          )
        })}
      </div>
      <div className="mt-10 px-6">
        <SignedIn>
          <SignOutButton redirectUrl="sign-in">
            <div className="flex text-light-1 cursor-pointer gap-4 p-4">
              <Image src="/assets/logout.svg" alt="logout" height={28} width={28}></Image>
              <p className="text-light-2 max-lg:hidden">Logout</p>
            </div>
          </SignOutButton>
        </SignedIn>
      </div>
    </section>
  )
}