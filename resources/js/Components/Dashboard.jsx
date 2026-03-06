import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Title from './Title';
export default function Dashboard() {

    return (
        <div className="min-h-screen bg-[--color-bg-dark] flex flex-col justify-between font-sans text-[--color-mx-white]">
            <div>
                <Header />
                <main className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">

                    <Title title="Dashboard principal" />


                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Left Column - Noticias y Talleres */}
                        <div className="space-y-8">

                            {/* Noticias de la UNAM */}
                            <section className="bg-gradient-to-br from-blue-900 to-blue-600 rounded-xl p-6 border border-blue-800">
                                <div className="relative z-10">
                                    <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                                        <span className="w-2 h-8 bg-blue-600 rounded-sm"></span>
                                        Noticias de la UNAM
                                    </h2>
                                    <div className="space-y-4">
                                        <article className="bg-white bg-opacity-30 rounded-lg p-4">
                                            <h3 className="font-bold color-unam-blue mb-2">Nuevos programas de intercambio internacional 2026</h3>
                                            <p className="color-unam-black text-sm mb-2">La UNAM amplía convenios con universidades de Europa y Asia.</p>
                                            <span className="text-xs color-unam-black">Hace 2 horas</span>
                                        </article>
                                        <article className="bg-white bg-opacity-30 rounded-lg p-4">
                                            <h3 className="font-bold color-unam-blue mb-2">FES Acatlán obtiene reconocimiento en investigación</h3>
                                            <p className="color-unam-black text-sm mb-2">Proyecto de ciencias sociales premiado a nivel nacional.</p>
                                            <span className="text-xs color-unam-black">Hace 5 horas</span>
                                        </article>
                                    </div>
                                    <button className="mt-4 text-xs font-bold uppercase bg-white text-blue-900 px-3 py-2 rounded-lg hover:bg-gray-100 transition">Ver todas las noticias</button>
                                </div>
                            </section>

                            {/* Talleres y Conferencias */}
                            <section className="bg-gradient-to-br from-yellow-900 to-yellow-600 rounded-xl p-6 border border-yellow-800 relative overflow-hidden">
                                <div className="relative z-10">
                                    <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                                        <span className="w-2 h-8 bg-yellow-600 rounded-sm"></span>
                                        Talleres y Conferencias
                                    </h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="bg-white bg-opacity-30 rounded-lg p-4">
                                            <h3 className="font-bold color-unam-blue mb-2">Taller de Investigación</h3>
                                            <p className="color-unam-black text-sm mb-2">Metodología y técnicas de investigación social</p>
                                            <div className="flex justify-between items-center mt-3">
                                                <span className="text-xs color-unam-black">15 Mar 2026</span>
                                                <span className="text-xs bg-yellow-600 text-white px-2 py-1 rounded">Presencial</span>
                                            </div>
                                        </div>
                                        <div className="bg-white bg-opacity-30 rounded-lg p-4">
                                            <h3 className="font-bold color-unam-blue mb-2">Conferencia: Tecnología Educativa</h3>
                                            <p className="color-unam-black text-sm mb-2">Nuevas herramientas para el aprendizaje</p>
                                            <div className="flex justify-between items-center mt-3">
                                                <span className="text-xs color-unam-black">18 Mar 2026</span>
                                                <span className="text-xs bg-green-600 text-white px-2 py-1 rounded">Virtual</span>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="mt-4 text-xs font-bold uppercase bg-white text-yellow-900 px-3 py-2 rounded-lg hover:bg-gray-100 transition">Ver calendario completo</button>
                                </div>
                            </section>

                        </div>

                        {/* Right Column - Carreras */}
                        <div>
                            {/* Carreras FES Acatlán */}
                            <section>
                                <h2 className="text-xl font-bold color-unam-black uppercase tracking-wider mb-4 flex items-center gap-2">
                                    <span className="w-2 h-8 rounded-sm"></span>
                                    Carreras FES Acatlán
                                </h2>
                                <div className="bg-gray-100 rounded-xl p-6 border border-gray-300">
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-sm">
                                            <thead>
                                                <tr className="border-b border-gray-600">
                                                    <th className="text-left py-3 px-4 font-bold color-unam-blue">Carrera</th>
                                                    <th className="text-left py-3 px-4 font-bold color-unam-blue">División</th>
                                                    <th className="text-left py-3 px-4 font-bold color-unam-blue">Modalidad</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="border-b border-gray-700 hover:bg-gray-300 transition">
                                                    <td className="py-3 px-4 color-unam-black">Derecho</td>
                                                    <td className="py-3 px-4 color-unam-black">Ciencias Sociales</td>
                                                    <td className="py-3 px-4">
                                                        <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded">Escolarizada</span>
                                                    </td>
                                                </tr>
                                                <tr className="border-b border-gray-700 hover:bg-gray-300 transition">
                                                    <td className="py-3 px-4 color-unam-black">Psicología</td>
                                                    <td className="py-3 px-4 color-unam-black">Ciencias Sociales</td>
                                                    <td className="py-3 px-4">
                                                        <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded">Escolarizada</span>
                                                    </td>
                                                </tr>
                                                <tr className="border-b border-gray-700 hover:bg-gray-300 transition">
                                                    <td className="py-3 px-4 color-unam-black">Comunicación</td>
                                                    <td className="py-3 px-4 color-unam-black">Humanidades</td>
                                                    <td className="py-3 px-4">
                                                        <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded">Escolarizada</span>
                                                    </td>
                                                </tr>
                                                <tr className="border-b border-gray-700 hover:bg-gray-300 transition">
                                                    <td className="py-3 px-4 color-unam-black">Pedagogía</td>
                                                    <td className="py-3 px-4 color-unam-black">Humanidades</td>
                                                    <td className="py-3 px-4">
                                                        <span className="text-xs bg-green-600 text-white px-2 py-1 rounded">Mixta</span>
                                                    </td>
                                                </tr>
                                                <tr className="border-b border-gray-700 hover:bg-gray-300 transition">
                                                    <td className="py-3 px-4 color-unam-black">Trabajo Social</td>
                                                    <td className="py-3 px-4 color-unam-black">Ciencias Sociales</td>
                                                    <td className="py-3 px-4">
                                                        <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded">Escolarizada</span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </section>
                        </div>

                    </div>

                </main>
            </div>
            <Footer />
        </div>
    );
}
