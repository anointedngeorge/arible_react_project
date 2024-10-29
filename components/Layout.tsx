import React from 'react'
import Topmenue from './Topmenue';
import Footer from './Footer';

export default function CustomLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <main>
        <Topmenue />
            {children}
        <Footer />
      </main>
    );
  }
