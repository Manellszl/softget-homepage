'use client'; 

import Link from 'next/link'; 
import styles from './AnimatedButton.module.css';

type Props = {
  href: string;
  text: string;
};

export default function AnimatedButton({ href, text }: Props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.link_wrapper}>
        
        {}
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          {text}
        </a>

      </div>
    </div>
  );
}