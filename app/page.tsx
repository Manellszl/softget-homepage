import Link from 'next/link';
import { ShieldCheck, Database, BarChart, Users } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import AnimatedButton from '../components/AnimatedButton';

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      
      {/* Seção 1: Hero (Abertura) */}
      <section className="relative bg-gray-900 text-white py-24 md:py-32">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            SoftGet<p></p> Sistemas de Gestão Inteligentes
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Soluções digitais seguras e eficientes para gestão de contabilidade de associações.
            
          </p>
        </div>
      </section>

      {/* Seção 2: Nossas Soluções (O Portfólio) */}
      <section id="sistemas" className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          
          {/* Envolva o título */}
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
              Conheça Nossas Soluções
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
            {/* Envolva o Card 1 */}
            <FadeIn>
              <div className="bg-white border border-gray-200 rounded-lg shadow-2xl overflow-hidden flex flex-col h-full">
                <div className="p-8 flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900">
                    Sistema de Gestão de Associação
                  </h3>
                  
                  {}
                  <p className="mt-4 text-gray-700">
                    A ferramenta completa baseada nos seus designs do Figma. Controle
                    associados, finanças, patrimônio e obrigações com segurança
                    e relatórios em tempo real.
                  </p>
                  <ul className="mt-6 space-y-3">
                    <li className="flex items-center text-gray-800">
                      <Users className="h-5 w-5 text-blue-600 mr-3" />
                      Controle de Associados e Inadimplência
                    </li>
                    <li className="flex items-center text-gray-800">
                      <Database className="h-5 w-5 text-blue-600 mr-3" />
                      Gestão Financeira e Patrimonial
                    </li>
                    <li className="flex items-center text-gray-800">
                      <BarChart className="h-5 w-5 text-blue-600 mr-3" />
                      Relatórios e Dashboards Visuais
                    </li>
                    <li className="flex items-center text-gray-800">
                      <ShieldCheck className="h-5 w-5 text-blue-600 mr-3" />
                      Segurança e Acesso Multi-Nível
                    </li>
                  </ul>
                  {}
                  
                </div>
                <div className="p-6 bg-gray-50 border-t border-gray-100">
                  <AnimatedButton 
                    href="https://app.softget.com.br"
                    text="Acessar o Sistema"
                />
                </div>
              </div>
            </FadeIn> {/* Fim do wrapper do Card 1 */}


            {/* Envolva o Card 2 */}
            <FadeIn>
              <div className="border-2 border-dashed border-gray-300 rounded-lg bg-gray-50 flex flex-col items-center justify-center p-8 h-full">
                <h3 className="text-2xl font-bold text-gray-500">
                  Em Breve: Novas Soluções
                </h3>
                <p className="mt-4 text-gray-500 text-center max-w-xs">
                  Estamos desenvolvendo mais ferramentas para otimizar sua gestão
                  contábil e administrativa.
                </p>
              </div>
            </FadeIn> {/* Fim do wrapper do Card 2 */}
            
          </div>
        </div>
      </section>
    </main>
  );
}