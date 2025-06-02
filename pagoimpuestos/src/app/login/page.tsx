"use client";
import React from 'react';
import { useEffect } from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';


const LoginPage = () => {
    const { data: session } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (session) {
            router.push('/dashboard');
        }
    }, [session, router]);

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-2xl font-bold mb-4">Iniciar Sesión</h1>
            <button
                onClick={() => signIn('google')}
                className="bg-blue-500 text-white px-4 py-2 rounded"
            >
                Iniciar sesión con Google
            </button>
            <div className="mt-4">
                {session && session.user ? (
                    <>
                        <p>Bienvenido, {session.user.name}</p>
                        <button
                            onClick={() => signOut()}
                            className="bg-red-500 text-white px-4 py-2 rounded"
                        >
                            Cerrar sesión
                        </button>
                    </>
                ): null}
            </div>

        </div>
    );
}

export default LoginPage;