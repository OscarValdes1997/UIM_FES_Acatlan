import React from 'react';

export default function PurposeSection() {
    return (
        <section className="bg-unam-blue text-white rounded-xl p-6 lg:p-10 shadow-unam overflow-hidden relative">
            {/* Acento de Fondo */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-unam-gold rounded-full blur-3xl opacity-20"></div>

            <div className="flex flex-col lg:flex-row gap-8 relative z-10">
                <div className="flex-1">
                    <h2 className="text-unam-gold text-2xl md:text-3xl font-black mb-6 uppercase tracking-tight">
                        UIM — Propósito de la Investigación
                    </h2>

                    <p className="text-gray-200 leading-relaxed mb-8 text-lg">
                        La Facultad de Estudios Superiores Acatlán, como entidad académica de la Universidad Nacional Autónoma de México, desarrolla actividades de investigación orientadas al fortalecimiento de la vida académica, promoviendo la generación de conocimiento y su integración con las funciones sustantivas de la Universidad.
                    </p>

                    <div className="space-y-8">
                        <div>
                            <h3 className="text-unam-gold font-bold text-xl mb-3 flex items-center gap-2">
                                <span className="w-1.5 h-6 bg-unam-gold rounded-full"></span>
                                Objetivo
                            </h3>
                            <p className="text-gray-300">
                                Vincular la investigación con la atención y solución de problemáticas nacionales, fomentando su integración con la docencia y la difusión de la cultura. Asimismo, impulsar la formación y consolidación de profesores de carrera dedicados a la investigación, fortaleciendo la relación entre la generación de conocimiento y el proceso educativo.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-unam-gold font-bold text-xl mb-3 flex items-center gap-2">
                                <span className="w-1.5 h-6 bg-unam-gold rounded-full"></span>
                                Funciones
                            </h3>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
                                <li className="flex gap-2">
                                    <span className="text-unam-gold">✔</span>
                                    Desarrollar investigación interdisciplinaria y multidisciplinaria.
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-unam-gold">✔</span>
                                    Generar y aportar conocimiento científico en diversas áreas.
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-unam-gold">✔</span>
                                    Brindar apoyo a actividades de docencia e investigación.
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-unam-gold">✔</span>
                                    Atender problemáticas nacionales prioritarias.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="lg:w-1/3 flex items-center justify-center">
                    <div className="relative group">
                        <div className="absolute inset-0 bg-unam-gold rounded-xl rotate-3 group-hover:rotate-0 transition-transform"></div>
                        <img
                            src="/carrucel_dashboard/investigacion.jpg"
                            alt="Investigación UIM"
                            className="relative rounded-xl shadow-2xl transition-transform group-hover:-translate-y-2 group-hover:-translate-x-2 group-hover:grayscale-0 duration-500"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
