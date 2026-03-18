import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-unam-blue text-white pt-8 pb-6 mt-12 border-t border-white/10">
            <div className="container mx-auto px-4">
                <div className="text-center">
                    <p className="text-gray-400 text-sm mb-2 uppercase tracking-widest">
                        Hecho en México, todos los derechos reservados {new Date().getFullYear()}.
                    </p>
                    <div className="text-unam-gold font-bold text-xs">
                        UNAM — FES Acatlán | Unidad de Investigación Multidisciplinaria
                    </div>
                </div>
            </div>
        </footer>
    );
}
