import { sidebarLinks } from "@/app/constants"
import Image from "next/image"
import Link from "next/link"
export default function LeftSidebar(){
  return(
    <section className="custom-scrollbar leftsidebar">
      <div className="flex w-ful flex-1 flex-col gap-6">
        {sidebarLinks.map((link)=>{
          return(
            <Link href={link.route} key={link.label} className="leftsidebar_link">
              <Image src={link.imgURL} alt="" width={24} height={24}>

              </Image>
              <p className="text-light-1">{link.label}</p>
            </Link>
          )
        })}
      </div>
    </section>
  )
}