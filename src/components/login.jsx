import React, {useState} from 'react';
import zinebshop from './zinebshop.svg'
import {useNavigate} from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userRole, setUserRole] = useState(null);

    const users = {
        admin: {
            username: "admin",
            password: "admin123",
            nom: "Dupont",
            prenom: "Jean",
            adresse: "123 Rue de l'Admin",
            role: "Administrateur",
            telephone: "0102030405"
        },
        client: {
            username: "client",
            password: "client123",
            nom: "Durand",
            prenom: "Marie",
            adresse: "456 Rue du Client",
            role: "Client",
            telephone: "0607080910"
        }
    };
    const navigate = useNavigate(); // Ajoutez cette ligne

    const handleLogin = (username, password) => {
        const user = Object.values(users).find(u => u.username === username && u.password === password);
        if (user) {
            setIsAuthenticated(true);
            setUserRole(user.role);
            // Redirection après la connexion
            if (user.role === 'Administrateur') {
                navigate('/admin');
            } else {
                navigate('/');
            }
        } else {
            alert("Identifiants incorrects");
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin(username, password);
    };
    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img src={zinebshop} className=" h-36 mr-2" alt="Flowbite Logo"/>
                </a>
                <div
                    className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="username"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                    username</label>
                                <input type="username" name="username" id="username"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       placeholder="name@company.com" required=""
                                       value={username}
                                       onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="password"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       required=""
                                       value={password}
                                       onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox"
                                               className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-red-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-red-600 dark:ring-offset-gray-800"
                                               required=""/>
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember
                                            me</label>
                                    </div>
                                </div>
                                <a href="#"
                                   className="text-sm font-medium text-red-600 hover:underline dark:text-red-500">Forgot
                                    password?</a>
                            </div>
                            <button type="submit"
                                    className="w-full text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Sign
                                in
                            </button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don’t have an account yet? <a href="#"
                                                              className="font-medium text-red-600 hover:underline dark:text-red-500">Sign
                                up</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>


    );
};

export default Login;
