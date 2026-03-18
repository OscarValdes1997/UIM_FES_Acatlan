import React from 'react';
import AppLayout from '../../Layouts/AppLayout';
import { useAuth } from '../../Auth/AuthContext';

export default function BasePanel({ titulo, children }) {
    return (
        <AppLayout>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 pb-6 border-b border-gray-100">
                <div className="space-y-1">
                    <h1 className="text-3xl md:text-4xl font-black text-unam-blue uppercase tracking-tight">
                        {titulo || 'Modulo del Sistema'}
                    </h1>
                    <div className="h-1.5 w-24 bg-unam-gold rounded-full"></div>
                </div>
            </div>

            <div className="glass-card overflow-hidden transition-all hover:shadow-2xl hover:shadow-unam-blue/5 border-none">
                {/* Accent line */}
                <div className="h-2 bg-unam-blue w-full"></div>
                
                <div className="p-6 md:p-10">
                    <div className="prose prose-blue max-w-none">
                        {children || (
                            <div className="flex flex-col items-center justify-center py-20 text-gray-400">
                                <div className="text-4xl mb-4">📂</div>
                                <p className="font-bold uppercase tracking-widest text-xs">Sin contenido disponible en este módulo</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Decorative Bottom Bar */}
                <div className="bg-gray-50 px-8 py-4 border-t border-gray-100 flex justify-between items-center">
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">UIM FES ACATLÁN — UNAM {new Date().getFullYear()}</span>
                    <div className="flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-unam-blue/20"></div>
                        <div className="w-2 h-2 rounded-full bg-unam-gold/20"></div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
