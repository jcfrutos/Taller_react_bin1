import { signIn } from 'next-auth/react';

const AuthButton = () => {
    const handleLogin = () => {
        signIn('google');
    };

    return (
        <button onClick={handleLogin} className="auth-button">
            Iniciar sesión con Google
        </button>
    );
};

export default AuthButton;