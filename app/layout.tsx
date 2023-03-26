import './globals.css'

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
      <body>{children}</body>
    </html>
  )
}
