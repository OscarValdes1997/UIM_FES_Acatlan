import React from 'react';

export default function Sidebar() {
    const menuItems = [
        { name: 'Inicio', icon: '🏠', href: '#' },
        { name: 'Dashboard', icon: '📊', href: '#' },
    ];

    const sections = [
        { name: 'Líneas de investigación', icon: '📊', href: '#' },
        { name: 'Proyectos', icon: '📁', href: '#' },
        { name: 'Cuerpos académicos', icon: '👩‍🏫', href: '#' },
        { name: 'Publicaciones', icon: '📚', href: '#' },
        { name: 'Convocatorias', icon: '📢', href: '#' },
    ];

    return (
        <aside className="w-full lg:w-64 bg-unam-blue text-white min-h-screen py-6 px-4 shadow-2xl sticky top-0">
            <h5 className="text-center font-bold text-lg border-b border-white/20 pb-4 mb-6 uppercase tracking-widest">
                Menú
            </h5>

            <nav className="space-y-2">
                {menuItems.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10 transition-colors group"
                    >
                        <span className="text-xl">{item.icon}</span>
                        <span className="font-medium group-hover:text-unam-gold transition-colors">{item.name}</span>
                    </a>
                ))}
            </nav>

            <div className="mt-10">
                <h6 className="text-unam-gold font-bold text-xs uppercase tracking-[0.2em] mb-4 px-4">
                    Secciones UIM
                </h6>
                <nav className="space-y-1">
                    {sections.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-white/10 transition-colors group text-sm"
                        >
                            <span className="group-hover:scale-110 transition-transform">{item.icon}</span>
                            <span className="group-hover:translate-x-1 transition-transform">{item.name}</span>
                        </a>
                    ))}
                </nav>
            </div>
        </aside>
    );
}
