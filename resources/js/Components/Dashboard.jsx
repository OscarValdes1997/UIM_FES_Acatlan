import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Carousel from './Carousel';
import PurposeSection from './PurposeSection';
import EventsGrid from './EventsGrid';

export default function Dashboard() {
    return (
        <div className="min-h-screen bg-unam-white flex flex-col font-sans">
            <Header />
            
            {/* Carousel - Now full width at the top */}
            <Carousel />

            <div className="flex flex-col lg:flex-row flex-grow border-t-4 border-unam-gold/20">
                {/* Sidebar - Starts below the Carousel */}
                <Sidebar />

                {/* Main Content Area */}
                <main className="flex-grow flex flex-col basis-0">
                    <div className="w-full py-8 px-4 sm:px-6 lg:px-8 space-y-8">
                        
                        {/* Middle Section: Purpose + 2 Side Blocks */}
                        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
                            {/* UIM Propósito (Largo) */}
                            <div className="xl:col-span-3">
                                <PurposeSection />
                            </div>
                            
                            {/* Side Blocks (2 Stacked) */}
                            <div className="xl:col-span-1 flex flex-col gap-6">
                                <div className="bg-unam-blue text-white rounded-xl p-6 shadow-unam group cursor-pointer hover:bg-unam-blue/90 transition-colors h-1/2 flex flex-col justify-center border-l-4 border-unam-gold">
                                    <h5 className="text-unam-gold font-bold text-lg mb-2 group-hover:translate-x-1 transition-transform uppercase tracking-wider">Investigación</h5>
                                    <p className="text-gray-300 text-sm">Proyectos y líneas de investigación académica.</p>
                                </div>

                                <div className="bg-unam-blue text-white rounded-xl p-6 shadow-unam group cursor-pointer hover:bg-unam-blue/90 transition-colors h-1/2 flex flex-col justify-center border-l-4 border-unam-gold">
                                    <h5 className="text-unam-gold font-bold text-lg mb-2 group-hover:translate-x-1 transition-transform uppercase tracking-wider">Convocatorias</h5>
                                    <p className="text-gray-300 text-sm">Oportunidades académicas vigentes.</p>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Section: Events Row */}
                        <div className="grid grid-cols-1 gap-6">
                            <div className="w-full">
                                <h3 className="text-unam-blue font-black text-2xl uppercase mb-4 flex items-center gap-3">
                                    <span className="w-8 h-1 bg-unam-gold rounded-full"></span>
                                    Eventos
                                </h3>
                                <EventsGrid />
                            </div>
                        </div>

                    </div>
                </main>
            </div>

            <Footer />
        </div>
    );
}
