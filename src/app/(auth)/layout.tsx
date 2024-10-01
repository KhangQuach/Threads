
import { ClerkProvider } from '@clerk/nextjs'
import { Inter } from 'next/font/google'

// import '@/app/global.css'

export const metadata = {
  title: 'Threads',
  description: 'Threads Application'
}
const inter = Inter({
  subsets: ['latin'],
})
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider afterSignOutUrl={"/sign-in"}>
      <html lang="en">
        <body className={`${inter.className} bg-dark-1`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}