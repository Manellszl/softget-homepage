import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SoftGet - Sistemas de Gestão Inteligentes',
  description: 'Soluções digitais para gestão de associações e contabilidade.',
};

/**
 * Componente do Header (Menu de Navegação)
 */
function Header() {
  return (
    <header className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-white">
          SoftGet
        </Link>
        
        {/* Links de Navegação */}
        <div className="flex items-center space-x-6">
          <Link href="/" className="text-gray-300 hover:text-white transition-colors">
            Início
          </Link>
          <Link href="/#sistemas" className="text-gray-300 hover:text-white transition-colors">
            Sistemas
          </Link>

        </div>
      </nav>
    </header>
  );
}

/**
 * Componente do Rodapé
 */
function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; {new Date().getFullYear()} SoftGet. Todos os direitos reservados.</p>
        <p className="mt-2 text-sm">By Emanuel Pereira de Faria </p>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-100`}>
        <Header />
        {children} 
        <Footer />
      </body>
    </html>
  );
}