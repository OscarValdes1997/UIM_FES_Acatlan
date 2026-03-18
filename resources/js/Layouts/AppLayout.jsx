import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

export default function AppLayout({ children }) {
    return (
        <div className="min-h-screen bg-unam-white flex flex-col font-sans text-unam-blue selection:bg-unam-gold selection:text-white">
            <Header />
            
            <main className="flex-grow max-w-7xl mx-auto w-full py-10 px-4 sm:px-6 lg:px-8 animate-fade-in">
                {children}
            </main>

            <Footer />
        </div>
    );
}
