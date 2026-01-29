import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Reventa San Juan',
  description: 'Plataforma de reventa de productos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <header className="bg-blue-600 text-white p-4">
          <div className="container mx-auto">
            <h1 className="text-2xl font-bold">Reventa San Juan</h1>
            <nav className="mt-2">
              <ul className="flex space-x-4">
                <li><a href="/" className="hover:text-blue-200">Inicio</a></li>
                <li><a href="/productos" className="hover:text-blue-200">Productos</a></li>
                <li><a href="/login" className="hover:text-blue-200">Iniciar Sesión</a></li>
                <li><a href="/register" className="hover:text-blue-200">Registrarse</a></li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="container mx-auto p-4">
          {children}
        </main>
        <footer className="bg-gray-800 text-white p-4 mt-8">
          <div className="container mx-auto text-center">
            <p>&copy; {new Date().getFullYear()} Reventa San Juan. Todos los derechos reservados.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
