import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { forgotPassword } from '../../lib/auth';

export default function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState(null);
    const [error, setError] = useState(null);

    const onSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setMessage(null);
        setIsSubmitting(true);

        try {
            const data = await forgotPassword({ email });
            setMessage(data?.message || 'Si tu correo está registrado, recibirás un código de restablecimiento.');
        } catch (err) {
            const msg = err?.response?.data?.message || 'No se pudo enviar el código. Intenta de nuevo.';
            setError(msg);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen body-login flex items-center justify-center px-4 relative">
            {/* Background Decorative Elements */}
            <div className="absolute top-[-10%] right-[-10%] w-80 h-80 bg-unam-gold/10 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-unam-blue/20 rounded-full blur-[120px]"></div>

            <div className="glass-card w-full max-w-md p-8 md:p-10 relative z-10 transition-all">
                <div className="flex flex-col items-center mb-8">
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <img 
                            src="/header/logo-unam.png" 
                            alt="UNAM" 
                            className="h-14 w-auto brightness-0" 
                        />
                        <img 
                            src="/header/logo-fesa.png" 
                            alt="FES Acatlán" 
                            className="h-12 w-auto brightness-0" 
                        />
                    </div>
                    
                    <h1 className="text-unam-blue text-center text-xl font-black uppercase tracking-tight">
                        Recuperar Acceso
                    </h1>
                    <div className="mt-2 h-1 w-12 bg-unam-gold rounded-full"></div>
                    <p className="text-gray-500 text-sm mt-4 text-center">
                        Enviaremos un código de seguridad a tu correo institucional.
                    </p>
                </div>

                {message && (
                    <div className="mb-6 rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-green-700 flex items-center gap-3">
                        <span className="text-lg">✅</span>
                        {message}
                    </div>
                )}

                {error && (
                    <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700 flex items-center gap-3">
                        <span className="text-lg">⚠️</span>
                        {error}
                    </div>
                )}

                <form onSubmit={onSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <label className="block text-xs font-bold uppercase tracking-[0.15em] text-unam-blue/70 ml-1">Correo Electrónico</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full rounded-xl bg-gray-50 border border-gray-200 px-5 py-3.5 text-unam-blue outline-none transition-all focus:border-unam-gold focus:bg-white focus:ring-4 focus:ring-unam-gold/10"
                            placeholder="usuario@comunidad.unam.mx"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full rounded-xl bg-unam-blue hover:bg-unam-gold active:scale-[0.98] transition-all px-4 py-4 font-bold uppercase tracking-[0.2em] text-white shadow-xl shadow-unam-blue/20 disabled:opacity-70"
                    >
                        {isSubmitting ? 'Enviando...' : 'Enviar Código'}
                    </button>
                </form>

                <div className="mt-8 flex flex-col items-center gap-4 text-sm border-t border-gray-100 pt-6">
                    <Link to="/restablecer" className="text-unam-blue font-bold hover:text-unam-gold transition-colors">
                        Ya tengo un código
                    </Link>
                    <Link to="/login" className="text-gray-400 hover:text-unam-blue transition-colors uppercase text-[10px] font-black tracking-widest">
                        Volver al inicio de sesión
                    </Link>
                </div>
            </div>
        </div>
    );
}
