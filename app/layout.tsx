import './globals.css'
import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'Link Social',
  description: 'Next.Js 13 + Tailwind CSS ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
