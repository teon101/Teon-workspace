// app/layout.js
import './globals.css'

export const metadata = {
  title: 'My Portfolio',
  description: 'My professional portfolio showcasing my work and skills',
}

export default function RootLayout({ children }): {
  return (
    <html lang="en">
      <body className="bg-zinc-900 text-white min-h-screen">
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="border-t border-zinc-800 py-6 mt-12 text-center text-zinc-400">
          <p>© {new Date().getFullYear()} - TEON. All rights reserved.</p>
        </footer>
      </body>
    </html>
  )
}
