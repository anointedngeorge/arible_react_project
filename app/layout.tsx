import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'The Arible Estate & Properties',
  description: 'The Arible Estate & Properties',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
