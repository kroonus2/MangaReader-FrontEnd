export const Navbar = () => {
    return (
        <nav className="bg-cyan-600 mx-6 py-4 rounded-md p-2 border-2 border-sky-600 rounded-lg">
            <div className="mx-auto max-w-9xl px-2 sm:px-6 lg:px-8 ">
                <div className="relative flex h-12 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button type="button" className="inline-flex items-center justify-center rounded-md p-2 text-gray-400
                        houver:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-controls="mobile-menu" aria-expanded="false">
                            <span className="sr-only">
                                Abrir Menu Principal
                            </span>
                            <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>

                            <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <a href="/" className="flex flex-shrink-0 items-center bg-sky-700 text-white rounded-md px-3 py-1 hover:shadow-lg text-sm font-medium">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="block w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                            </svg>
                            <h1 className="text-center font-bold">
                                Mangá Reader's
                            </h1>
                        </a>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                <a href="*" className="text-white hover:bg-sky-700 hover:text-white rounded-md px-3 py-3 text-sm font-medium">
                                    Mangás
                                </a>
                                <a href="*" className="text-white hover:bg-sky-700 hover:text-white rounded-md px-3 py-3 text-sm font-medium">
                                    Categorias
                                </a>
                                <a href="*" className="text-white hover:bg-sky-700 hover:text-white rounded-md px-3 py-3 text-sm font-medium">
                                    Scans
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <div className="relative" data-te-input-wrapper-init>
                            <input
                                type="search"
                                className="peer block min-h-[auto] w-full rounded-lg border-solid border-2 border-sky-700 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                id="searchBar"
                                placeholder="Type query"
                            />
                            <label className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] 
                                truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 
                                ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary 
                                peer-data-[te-input-state-active]:-translate-y-[0.9rem] 
                                peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none 
                                dark:text-neutral-200 dark:peer-focus:text-primary"
                            >Pesquisar
                            </label>
                        </div>
                        <div className="relative ml-3">
                            <div>
                                <button type="button" className="border-2 border-sky-700 hover:bg-sky-700 text-white rounded-md px-3 py-2 text-sm font-medium"
                                    id="user-menu-btn" aria-expanded="false" aria-haspopup="true">
                                    <span className="sr-only">Open user menu</span>
                                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-8 w-8 rounded-full">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                    </svg> */}
                                    Login
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
