'use client'; // Obrigatório! Este componente usa hooks do lado do cliente.

import React from 'react';
import { useInView } from 'react-intersection-observer';

type FadeInProps = {
  children: React.ReactNode;
  /**
   * Anima apenas uma vez? 
   * Se true, não faz "fade out" ao sair da tela.
   * Se false (padrão), faz "fade in" e "fade out" toda vez que entra/sai.
   */
  triggerOnce?: boolean;
  /**
   * Duração da transição em milissegundos.
   * Ex: 'duration-300', 'duration-500', 'duration-1000'
   */
  durationClass?: string;
  /**
   * Distância do "slide-up"
   * Ex: 'translate-y-5', 'translate-y-10'
   */
  translateClass?: string;
};

export default function FadeIn({
  children,
  triggerOnce = false,
  durationClass = 'duration-700', 
  translateClass = 'translate-y-10' 
}: FadeInProps) {

  const { ref, inView } = useInView({
    triggerOnce: triggerOnce,
    threshold: 0.2, 
  });

  return (
    <div
      ref={ref}
      className={`
        transition-all ease-out ${durationClass}
        ${inView ? 'opacity-100 translate-y-0' : `opacity-0 ${translateClass}`}
      `}
    >
      {children}
    </div>
  );
}