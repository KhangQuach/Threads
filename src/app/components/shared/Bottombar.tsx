'use client'
import { sidebarLinks } from "@/app/constants"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Bottombar(){
  const pathName = usePathname()
  return(
    <section className="bottombar">
      <div className="bottombar_container">
      {sidebarLinks.map((link)=>{
          const isActive = (pathName.includes(link.route) && link.route.length > 1 ) || pathName === link.route
          return(
            <Link href={link.route} key={link.label} className={`bottombar_link ${isActive && 'bg-primary-500'}`}>
              <Image src={link.imgURL} alt="" width={24} height={24}>
              </Image>
              <p className="text-subtitle-medium text-light-1 max-sm:hidden">{link.label.split(/\s+/)[0]}</p>
            </Link>
          )
        })}
      </div>
    </section>
  )
}