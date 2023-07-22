import errorPageImage from '../images/errorPageImg.png';
import { Link } from 'react-router-dom';

export const NotFound = () => {
    return (
        <div
            className="h-screen w-screen flex items-center "
            style={{ backgroundImage: `url(${errorPageImage})`, backgroundSize: 'cover', opacity: '0.75' }}
        >
            <div className="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
                <div className="max-w-md bg-sky-700 dark:bg-gray-800 rounded-lg shadow-lg p-8">
                    <div className="text-5xl text-white font-bold">404</div>
                    <p className="text-2xl md:text-3xl text-white font-light leading-normal">
                        Desculpe, não encontramos esta página.
                    </p>
                    <p className="mb-8 text-white">
                        Mas não se preocupe, você pode encontrar muitas outras coisas em nossa página inicial.
                    </p>

                    <Link to="/">
                        <button className="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-sky-600 active:bg-sky-600 hover:bg-sky-700">
                            Voltar à página inicial
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};
