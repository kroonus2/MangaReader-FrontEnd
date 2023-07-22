import React from "react"
import { useState } from "react"
import { Carousel } from "../components/Carousel";

export const MainPage = () => {

    // Obter a data atual e formatá-la como "Dia/Mês/Ano"
    const currentDate = new Date().toLocaleDateString('pt-BR');
    return (
        <>
            <div className=" mx-2 p-2">
                <Carousel />
            </div>
            <div className="container mx-auto h-screen px-8 py-2  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-white">
                <div className="lg:col-span-2 p-2 border-2 border-sky-700 rounded-lg overflow-x-auto items-center">
                    <h2 className="border-b-2 border-sky-500 p-3 mx-5">
                        Lançamentos - {currentDate}
                    </h2>
                    <nav className="my-4">
                        <div className="flex flex-wrap lg:flex-nowrap lg:justify-center md:justify-start">
                            <div>
                                <button type="button" className="flex-1 flex-shrink-0 items-center bg-sky-700 text-white rounded-md px-5 py-3 hover:shadow-lg text-sm font-medium mx-3">Todos</button>
                            </div>
                            <div>
                                <button type="button" className="flex-1 flex-shrink-0 items-center bg-sky-700 text-white rounded-md px-5 py-3 hover:shadow-lg text-sm font-medium mx-3">Mangás</button>
                            </div>
                            <div>
                                <button type="button" className="flex-1 flex-shrink-0 items-center bg-sky-700 text-white rounded-md px-5 py-3 hover:shadow-lg text-sm font-medium mx-3">Manhuas</button>
                            </div>
                            <div>
                                <button type="button" className="flex-1 flex-shrink-0 items-center bg-sky-700 text-white rounded-md px-5 py-3 hover:shadow-lg text-sm font-medium mx-3">Web-Toons</button>
                            </div>
                            <div>
                                <button type="button" className="flex-1 flex-shrink-0 items-center bg-sky-700 text-white rounded-md px-5 py-3 hover:shadow-lg text-sm font-medium mx-3">Web-Novels</button>
                            </div>
                        </div>
                    </nav>
                    <div className="flex flex-1 flex-wrap justify-center">
                        <div className="card w-full sm:w-52 bg-gray-700 shadow-xl p-6 hover:shadow-2xl hover:shadow-sky-500/40 border-2 border-sky-700 rounded-xl m-2">
                            <div className="flex flex-col items-center"> {/* Centralize a imagem */}
                                <figure>
                                    <img src="https://placehold.co/150x200" alt="img-front-manga" />
                                </figure>
                            </div>
                            <div className="card-body p-2">
                                <h2 className="card-title text-center">Shoes!</h2>
                                <p className="text-sky-500">If a dog chews shoes whose shoes does he choose?</p>
                            </div>
                        </div>
                        <div className="card w-full sm:w-52 bg-gray-700 shadow-xl p-6 hover:shadow-2xl hover:shadow-sky-500/40 border-2 border-sky-700 rounded-xl m-2">
                            <div className="flex flex-col items-center"> {/* Centralize a imagem */}
                                <figure>
                                    <img src="https://placehold.co/150x200" alt="img-front-manga" />
                                </figure>
                            </div>
                            <div className="card-body p-2">
                                <h2 className="card-title text-center">Shoes!</h2>
                                <p className="text-sky-500">If a dog chews shoes whose shoes does he choose?</p>
                            </div>
                        </div>
                        <div className="card w-full sm:w-52 bg-gray-700 shadow-xl p-6 hover:shadow-2xl hover:shadow-sky-500/40 border-2 border-sky-700 rounded-xl m-2">
                            <div className="flex flex-col items-center"> {/* Centralize a imagem */}
                                <figure>
                                    <img src="https://placehold.co/150x200" alt="img-front-manga" />
                                </figure>
                            </div>
                            <div className="card-body p-2">
                                <h2 className="card-title text-center">Shoes!</h2>
                                <p className="text-sky-500">If a dog chews shoes whose shoes does he choose?</p>
                            </div>
                        </div>
                        <div className="card w-full sm:w-52 bg-gray-700 shadow-xl p-6 hover:shadow-2xl hover:shadow-sky-500/40 border-2 border-sky-700 rounded-xl m-2">
                            <div className="flex flex-col items-center"> {/* Centralize a imagem */}
                                <figure>
                                    <img src="https://placehold.co/150x200" alt="img-front-manga" />
                                </figure>
                            </div>
                            <div className="card-body p-2">
                                <h2 className="card-title text-center">Shoes!</h2>
                                <p className="text-sky-500">If a dog chews shoes whose shoes does he choose?</p>
                            </div>
                        </div>
                        <div className="card w-full sm:w-52 bg-gray-700 shadow-xl p-6 hover:shadow-2xl hover:shadow-sky-500/40 border-2 border-sky-700 rounded-xl m-2">
                            <div className="flex flex-col items-center"> {/* Centralize a imagem */}
                                <figure>
                                    <img src="https://placehold.co/150x200" alt="img-front-manga" />
                                </figure>
                            </div>
                            <div className="card-body p-2">
                                <h2 className="card-title text-center">Shoes!</h2>
                                <p className="text-sky-500">If a dog chews shoes whose shoes does he choose?</p>
                            </div>
                        </div>
                        <div className="card w-full sm:w-52 bg-gray-700 shadow-xl p-6 hover:shadow-2xl hover:shadow-sky-500/40 border-2 border-sky-700 rounded-xl m-2">
                            <div className="flex flex-col items-center"> {/* Centralize a imagem */}
                                <figure>
                                    <img src="https://placehold.co/150x200" alt="img-front-manga" />
                                </figure>
                            </div>
                            <div className="card-body p-2">
                                <h2 className="card-title text-center">Shoes!</h2>
                                <p className="text-sky-500">If a dog chews shoes whose shoes does he choose?</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="p-2 border-2 border-sky-700 rounded-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eos dicta, unde id saepe amet quas temporibus rem possimus laborum dolor, accusamus error autem necessitatibus odit ipsam eligendi asperiores minima.
                </div>
            </div>
        </>
    )
}