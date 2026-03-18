import React, { useState, useEffect } from 'react';

const slides = [
    {
        image: '/carrucel_dashboard/img1.jpg',
        title: 'UIM FES ACATLÁN',
    },
    {
        image: '/carrucel_dashboard/img2.jpg',
        title: 'CARRUSEL DE FOTOS',
    },
    {
        image: '/carrucel_dashboard/img3.jpg',
        title: 'PRUEBA DE TRANSICIÓN',
    },
];

export default function Carousel() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <section className="relative h-[250px] md:h-[400px] overflow-hidden bg-gray-200 group">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <h2 className="text-white text-3xl md:text-5xl font-black uppercase tracking-widest drop-shadow-2xl text-center px-4">
                            {slide.title}
                        </h2>
                    </div>
                </div>
            ))}

            {/* Indicadores */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-unam-gold w-8' : 'bg-white/50'
                            }`}
                    />
                ))}
            </div>

            {/* Controles */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </section>
    );
}
