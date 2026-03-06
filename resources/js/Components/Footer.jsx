import React from 'react';

export default function Footer() {
    return (
        <footer className="border-t border-gray-800 py-8 mt-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h4 className="text-lg font-bold uppercase tracking-wider mb-4 text-[--color-mx-white]">FES Acatlán</h4>
                        <p className="text-gray-900 text-sm">
                            La liga profesional de fútbol que une pasión, talento y tecnología.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold uppercase tracking-wider mb-4 text-[--color-mx-white]">Enlaces Rápidos</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="#" className="text-gray-900 text-sm">Reglamento</a></li>
                            <li><a href="#" className="text-gray-900 text-sm">Equipos</a></li>
                            <li><a href="#" className="text-gray-900 text-sm">Resultados</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold uppercase tracking-wider mb-4 text-[--color-mx-red]">Contacto</h4>
                        <p className="text-gray-900 text-sm">info@clubesunidos.com</p>
                    </div>
                </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
                <p className="text-gray-900">&copy; {new Date().getFullYear()} Facultad de Estudios Superiores Acatlán | Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}
