import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { resetPassword } from '../../lib/auth';

export default function ResetPassword() {
    const [email, setEmail] = useState('');
    const [token, setToken] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState(null);
    const [error, setError] = useState(null);

    const onSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setMessage(null);
        setIsSubmitting(true);

        try {
            const data = await resetPassword({
                email,
                token,
                password,
                password_confirmation: passwordConfirmation,
            });

            setMessage(data?.message || 'Contraseña restablecida con éxito. Ya puedes iniciar sesión.');
        } catch (err) {
            const errors = err?.response?.data?.errors;
            const msg = err?.response?.data?.message || (errors ? Object.values(errors).flat().join(' ') : null) || 'No se pudo restablecer. Revisa tu código y contraseña.';
            setError(msg);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen body-login flex items-center justify-center px-4 relative">
            {/* Background Decorative Elements */}
            <div className="absolute top-[-10%] left-[-10%] w-80 h-80 bg-unam-gold/10 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-unam-blue/20 rounded-full blur-[120px]"></div>

            <div className="glass-card w-full max-w-lg p-8 md:p-10 relative z-10 transition-all">
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
                        Nueva Contraseña
                    </h1>
                    <div className="mt-2 h-1 w-12 bg-unam-gold rounded-full"></div>
                    <p className="text-gray-500 text-sm mt-4 text-center">
                        Ingresa el código de 8 dígitos enviado a tu correo para restablecer tu acceso.
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

                <form onSubmit={onSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                            <label className="block text-[10px] font-bold uppercase tracking-[0.15em] text-unam-blue/70 ml-1">Correo</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full rounded-xl bg-gray-50 border border-gray-200 px-4 py-2.5 text-unam-blue outline-none transition-all focus:border-unam-gold"
                            />
                        </div>

                        <div className="space-y-1.5">
                            <label className="block text-[10px] font-bold uppercase tracking-[0.15em] text-unam-blue/70 ml-1">Código (8 dígitos)</label>
                            <input
                                type="text"
                                value={token}
                                onChange={(e) => setToken(e.target.value)}
                                required
                                maxLength={8}
                                className="w-full rounded-xl bg-gray-50 border border-gray-200 px-4 py-2.5 text-unam-blue outline-none transition-all focus:border-unam-gold tracking-widest text-center font-bold"
                                placeholder="00000000"
                            />
                        </div>
                    </div>

                    <div className="space-y-1.5">
                        <label className="block text-[10px] font-bold uppercase tracking-[0.15em] text-unam-blue/70 ml-1">Nueva Contraseña</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full rounded-xl bg-gray-50 border border-gray-200 px-4 py-2.5 text-unam-blue outline-none transition-all focus:border-unam-gold"
                            placeholder="••••••••"
                        />
                    </div>

                    <div className="space-y-1.5">
                        <label className="block text-[10px] font-bold uppercase tracking-[0.15em] text-unam-blue/70 ml-1">Confirmar Contraseña</label>
                        <input
                            type="password"
                            value={passwordConfirmation}
                            onChange={(e) => setPasswordConfirmation(e.target.value)}
                            required
                            className="w-full rounded-xl bg-gray-50 border border-gray-200 px-4 py-2.5 text-unam-blue outline-none transition-all focus:border-unam-gold"
                            placeholder="••••••••"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full mt-4 rounded-xl bg-unam-blue hover:bg-unam-gold active:scale-[0.98] transition-all px-4 py-3.5 font-bold uppercase tracking-[0.2em] text-white shadow-xl shadow-unam-blue/20 disabled:opacity-70"
                    >
                        {isSubmitting ? 'Guardando...' : 'Restablecer Acceso'}
                    </button>
                </form>

                <div className="mt-8 flex flex-col items-center gap-4 text-sm border-t border-gray-100 pt-6">
                    <div className="flex gap-6">
                        <Link to="/login" className="text-unam-blue font-bold hover:text-unam-gold transition-colors">
                            Ir al Login
                        </Link>
                        <Link to="/recuperar" className="text-unam-blue font-bold hover:text-unam-gold transition-colors">
                            Reenviar código
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
