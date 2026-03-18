import React from 'react';

export default function Header() {
    return (
        <header className="bg-unam-blue text-white py-3 shadow-lg relative z-50">
            <div className="container mx-auto px-4 flex items-center justify-between">
                {/* UNAM Logo */}
                <div className="flex-shrink-0">
                    <img 
                        src="https://www.unam.mx/sites/default/files/logo_unam.png" 
                        alt="UNAM" 
                        className="h-12 md:h-16 w-auto"
                        onError={(e) => { e.target.src = 'https://via.placeholder.com/60?text=UNAM' }}
                    />
                </div>

                {/* Centered Title */}
                <div className="text-center flex-grow px-4">
                    <h1 className="text-lg md:text-2xl font-bold leading-tight">
                        Unidad de Investigación Multidisciplinaria
                    </h1>
                    <span className="text-xs md:text-sm font-medium text-unam-gold uppercase tracking-[0.2em]">
                        FES Acatlán — UNAM
                    </span>
                </div>

                {/* FESA Logo */}
                <div className="flex-shrink-0">
                    <img 
                        src="https://www.acatlan.unam.mx/img/logo-fesa.png" 
                        alt="FES Acatlán" 
                        className="h-12 md:h-16 w-auto"
                        onError={(e) => { e.target.src = 'https://via.placeholder.com/60?text=FESA' }}
                    />
                </div>
            </div>
        </header>
    );
}
