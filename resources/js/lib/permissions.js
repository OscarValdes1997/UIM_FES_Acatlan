export function getPermisoNombre(user) {
    return user?.permiso?.nombre || null;
}

export function getHomePathForUser(user) {
    const permiso = getPermisoNombre(user);

    if (!permiso) return '/panel';

    const map = {
        desarrollador: '/panel/desarrollador',
        admin: '/panel/admin',
        jefatura: '/panel/jefatura',
        docente: '/panel/docente',
    };

    return map[permiso] || '/panel';
}
