import React from 'react';

const events = [
    { name: 'Evento', type: 'Institucional' },
    { name: 'Seminario', type: 'Académico' },
    { name: 'Congreso', type: 'Internacional' },
    { name: 'Taller', type: 'Práctico' },
    { name: 'Conferencia', type: 'Magistral' },
];

export default function EventsGrid() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {events.map((event) => (
                <div 
                    key={event.name} 
                    className="bg-white border-t-4 border-unam-gold p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow group cursor-pointer"
                >
                    <span className="text-xs text-unam-blue/60 font-bold uppercase tracking-widest block mb-1">
                        {event.type}
                    </span>
                    <h4 className="text-unam-blue font-bold text-lg group-hover:text-unam-gold transition-colors">
                        {event.name}
                    </h4>
                </div>
            ))}
        </div>
    );
}
