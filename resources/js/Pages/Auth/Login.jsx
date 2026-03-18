import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../Auth/AuthContext';
import { getHomePathForUser } from '../../lib/permissions';

export default function Login() {
    const navigate = useNavigate();
    const { signIn } = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(null);

    const onSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setIsSubmitting(true);

        try {
            const data = await signIn({ email, password });
            const user = data?.user;

            navigate(getHomePathForUser(user), { replace: true });
        } catch (err) {
            const message = err?.response?.data?.message || 'No se pudo iniciar sesión. Verifica tus datos.';
            setError(message);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen body-login flex items-center justify-center px-4 relative">
            {/* Background Decorative Elements */}
            <div className="absolute top-[-10%] left-[-10%] w-80 h-80 bg-unam-gold/10 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-unam-blue/20 rounded-full blur-[120px]"></div>

            <div className="glass-card w-full max-w-md p-8 md:p-10 relative z-10 transition-all">
                <div className="flex flex-col items-center mb-10">
                    <div className="flex items-center justify-center gap-6 mb-6">
                        <img 
                            src="/header/logo-unam.png" 
                            alt="UNAM" 
                            className="h-16 md:h-20 w-auto drop-shadow-md brightness-0" 
                        />
                        <div className="w-px h-12 bg-gray-300"></div>
                        <img 
                            src="/header/logo-fesa.png" 
                            alt="FES Acatlán" 
                            className="h-14 md:h-16 w-auto drop-shadow-md brightness-0" 
                        />
                    </div>
                    
                    <h1 className="text-unam-blue text-center text-xl md:text-2xl font-black uppercase tracking-tight leading-tight">
                        Unidad de Investigación Multidisciplinaria
                    </h1>
                    <div className="mt-2 h-1 w-20 bg-unam-gold rounded-full"></div>
                    <p className="text-gray-500 text-sm mt-4 font-medium uppercase tracking-widest text-center">Acceso al Sistema</p>
                </div>

                {error && (
                    <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700 flex items-center gap-3 animate-shake">
                        <span className="text-lg">⚠️</span>
                        {error}
                    </div>
                )}

                <form onSubmit={onSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <label className="block text-xs font-bold uppercase tracking-[0.15em] text-unam-blue/70 ml-1">Correo Institucional</label>
                        <div className="relative group">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full rounded-xl bg-gray-50 border border-gray-200 px-5 py-3.5 text-unam-blue outline-none transition-all focus:border-unam-gold focus:bg-white focus:ring-4 focus:ring-unam-gold/10"
                                placeholder="usuario@comunidad.unam.mx"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <div className="flex justify-between items-center ml-1">
                            <label className="block text-xs font-bold uppercase tracking-[0.15em] text-unam-blue/70">Contraseña</label>
                        </div>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full rounded-xl bg-gray-50 border border-gray-200 px-5 py-3.5 text-unam-blue outline-none transition-all focus:border-unam-gold focus:bg-white focus:ring-4 focus:ring-unam-gold/10"
                            placeholder="••••••••"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full rounded-xl bg-unam-blue hover:bg-unam-gold active:scale-[0.98] transition-all px-4 py-4 font-bold uppercase tracking-[0.2em] text-white shadow-xl shadow-unam-blue/20 disabled:opacity-70 disabled:cursor-wait"
                    >
                        {isSubmitting ? (
                            <span className="flex items-center justify-center gap-2">
                                <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Verificando...
                            </span>
                        ) : 'Iniciar Sesión'}
                    </button>
                </form>

                <div className="mt-10 flex flex-col items-center gap-4 text-sm border-t border-gray-100 pt-8">
                    <Link to="/recuperar" className="text-unam-blue font-bold hover:text-unam-gold transition-colors flex items-center gap-2">
                        <span>¿Problemas para acceder?</span>
                        <span className="text-unam-gold">→</span>
                    </Link>
                    <Link to="/" className="text-gray-400 hover:text-unam-blue transition-colors uppercase text-[10px] font-black tracking-widest">
                        Regresar al inicio
                    </Link>
                </div>
            </div>
            
            {/* Footer Text */}
            <div className="absolute bottom-6 left-0 right-0 text-center">
                <p className="text-white/40 text-[10px] uppercase tracking-[0.3em] font-medium">
                    Hecho en México • Todos los derechos reservados UNAM {new Date().getFullYear()}
                </p>
            </div>
        </div>
    );
}
