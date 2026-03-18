import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from '../Auth/AuthContext';

export default function Header() {
    const { user, signOut } = useAuth();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <header className="bg-unam-blue text-white py-4 shadow-2xl relative z-50 border-b border-white/5">
            <div className="container mx-auto px-4 flex items-center justify-between gap-6">
                {/* Logo UNAM */}
                <div className="flex-shrink-0 logo-unam hidden lg:block transition-transform hover:scale-105 duration-300">
                    <img
                        src="/header/logo-unam.png"
                        alt="UNAM"
                        className="h-14 md:h-16 w-auto drop-shadow-2xl"
                        onError={(e) => { e.target.src = 'https://via.placeholder.com/60?text=UNAM' }}
                    />
                </div>

                {/* Título Centrado */}
                <div className="text-center flex-grow px-2">
                    <h1 className="text-base md:text-2xl font-black leading-tight uppercase tracking-tight">
                        Unidad de Investigación Multidisciplinaria
                    </h1>
                    <div className="flex items-center justify-center gap-3 mt-1">
                        <div className="h-px w-8 bg-unam-gold/50"></div>
                        <span className="text-[10px] md:text-xs font-black text-unam-gold uppercase tracking-[0.3em]">
                            FES Acatlán — UNAM
                        </span>
                        <div className="h-px w-8 bg-unam-gold/50"></div>
                    </div>
                </div>

                {/* User Dropdown Section */}
                <div className="flex items-center gap-4 relative" ref={dropdownRef}>
                    {user ? (
                        <div className="relative">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className={`flex items-center gap-3 transition-all px-3 py-2 rounded-2xl border active:scale-95 group ${isOpen
                                    ? 'bg-white/20 border-white/40 shadow-lg shadow-black/20'
                                    : 'bg-white/5 border-white/10 hover:bg-white/15'
                                    }`}
                            >
                                <div className="hidden md:block text-right">
                                    <p className="text-[11px] font-black uppercase tracking-widest leading-none text-white/90">{user.nombre}</p>
                                    <p className="text-[9px] text-unam-gold font-black mt-1.5 uppercase tracking-tighter opacity-80">{user.rol?.nombre}</p>
                                </div>
                                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-xl group-hover:rotate-3 transition-all border-2 border-white/20 overflow-hidden">
                                    <img
                                        src="/header/logo-unam.png"
                                        alt="UNAM"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </button>

                            {/* Dropdown Menu */}
                            {isOpen && (
                                <div className="absolute right-0 mt-3 w-60 glass-card p-1.5 shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/20 backdrop-blur-2xl animate-in fade-in zoom-in-95 duration-200">
                                    {/* Triangle Pointer */}
                                    <div className="absolute -top-1.5 right-5 w-3 h-3 bg-white rotate-45 border-l border-t border-white/20 hidden md:block"></div>

                                    <div className="px-4 py-4 border-b border-gray-100/50">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-10 h-10 bg-unam-blue text-unam-gold rounded-lg flex items-center justify-center font-black text-base border-2 border-gray-50 uppercase">
                                                {user.nombre?.[0]}{user.apellido_paterno?.[0]}
                                            </div>
                                            <div className="overflow-hidden">
                                                <p className="text-unam-blue font-black text-sm uppercase leading-tight truncate">
                                                    {user.nombre}
                                                </p>
                                                <p className="text-gray-500 text-[10px] font-medium truncate">{user.email}</p>
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-1.5">
                                            <span className="bg-unam-blue text-white text-[8px] font-black px-2 py-0.5 rounded-md uppercase tracking-widest text-center">
                                                {user.rol?.nombre}
                                            </span>
                                            <span className="bg-unam-gold text-white text-[8px] font-black px-2 py-0.5 rounded-md uppercase tracking-widest text-center">
                                                {user.permiso?.nombre}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-1 space-y-0.5">
                                        <div className="px-2 py-1.5 text-[9px] font-black text-gray-400 uppercase tracking-widest">Cuenta</div>

                                        <button
                                            onClick={signOut}
                                            className="w-full flex items-center justify-between px-3 py-2.5 text-red-600 hover:bg-red-50 rounded-lg transition-all group font-bold"
                                        >
                                            <div className="flex items-center gap-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                                </svg>
                                                <span className="text-xs uppercase tracking-wide">Cerrar sesión</span>
                                            </div>
                                        </button>
                                    </div>

                                    <div className="mt-1 px-4 py-2 bg-gray-50 rounded-lg flex justify-between items-center text-[8px] font-black text-gray-500 uppercase tracking-widest">
                                        <span>UNAM {new Date().getFullYear()}</span>
                                        <span className="text-unam-blue/40 uppercase">Acatlán</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="flex-shrink-0 logo-fesa hidden lg:block transition-transform hover:scale-105 duration-300">
                            <img
                                src="/header/logo-fesa.png"
                                alt="FES Acatlán"
                                className="h-14 md:h-16 w-auto drop-shadow-2xl"
                                onError={(e) => { e.target.src = 'https://via.placeholder.com/60?text=FESA' }}
                            />
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}
