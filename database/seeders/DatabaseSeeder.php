<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Permiso;
use App\Models\Rol;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        // Seed Permisos
        $permisos = [
            'desarrollador',
            'admin',
            'jefatura',
            'docente',
        ];

        foreach ($permisos as $permisoNombre) {
            Permiso::firstOrCreate(['nombre' => $permisoNombre]);
        }

        // Seed Roles
        $roles = [
            'escritura y lectura',
            'lectura',
        ];

        foreach ($roles as $rolNombre) {
            Rol::firstOrCreate(['nombre' => $rolNombre]);
        }

        // Usuarios genéricos para pruebas
        // Debe cumplir con la política fuerte: min 8, may/min, número y símbolo
        $passwordPlano = 'Mac123@';

        $rolEscrituraLectura = Rol::where('nombre', 'escritura y lectura')->first();
        $rolLectura = Rol::where('nombre', 'lectura')->first();

        $usuarios = [
            [
                'permiso' => 'desarrollador',
                'rol' => $rolEscrituraLectura,
                'name' => 'dev',
                'email' => 'dev@unam.mx',
                'nombre' => 'Dev',
                'apellido_paterno' => 'FES',
                'apellido_materno' => 'UNAM',
            ],
            [
                'permiso' => 'admin',
                'rol' => $rolEscrituraLectura,
                'name' => 'admin',
                'email' => 'admin@unam.mx',
                'nombre' => 'Admin',
                'apellido_paterno' => 'FES',
                'apellido_materno' => 'UNAM',
            ],
            [
                'permiso' => 'jefatura',
                'rol' => $rolEscrituraLectura,
                'name' => 'jefatura',
                'email' => 'jefatura@unam.mx',
                'nombre' => 'Jefatura',
                'apellido_paterno' => 'FES',
                'apellido_materno' => 'UNAM',
            ],
            [
                'permiso' => 'docente',
                'rol' => $rolLectura,
                'name' => 'docente',
                'email' => 'docente@unam.mx',
                'nombre' => 'Docente',
                'apellido_paterno' => 'FES',
                'apellido_materno' => 'UNAM',
            ],
        ];

        foreach ($usuarios as $u) {
            $permiso = Permiso::where('nombre', $u['permiso'])->first();

            User::updateOrCreate(
                ['email' => $u['email']],
                [
                    'name' => $u['name'],
                    'password' => Hash::make($passwordPlano),
                    'permiso_id' => $permiso?->id,
                    'rol_id' => $u['rol']?->id,
                    'active' => true,
                    'nombre' => $u['nombre'],
                    'apellido_paterno' => $u['apellido_paterno'],
                    'apellido_materno' => $u['apellido_materno'],
                    'asignado' => null,
                ]
            );
        }

        /*
        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);
        */
    }
}
