import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { MangaCard } from '../components/MangaCard';
import Pagination from '../components/Pagination';
import { Manga } from '../types/Manga'

const categoryMangas: Manga[] = [
    {
        id: 1,
        title: 'Manga 1',
        image: 'https://placekitten.com/150/200',
        type: 'acao',
        description: 'Description of Manga 1',
    },
    {
        id: 2,
        title: 'Manga 2',
        image: 'https://placekitten.com/150/200',
        description: 'Description of Manga 2',
    },
    {
        id: 3,
        title: 'Manga 3',
        image: 'https://placekitten.com/150/200',
        description: 'Description of Manga 2',
    },
    {
        id: 4,
        title: 'Manga 4',
        image: 'https://placekitten.com/150/200',
        description: 'Description of Manga 2',
    },
    {
        id: 5,
        title: 'Manga 5',
        image: 'https://placekitten.com/150/200',
        description: 'Description of Manga 2',
    },
    {
        id: 6,
        title: 'Manga 6',
        image: 'https://placekitten.com/150/200',
        description: 'Description of Manga 2',
    },
    {
        id: 7,
        title: 'Manga 7',
        image: 'https://placekitten.com/150/200',
        description: 'Description of Manga 2',
    },
    {
        id: 8,
        title: 'Manga 8',
        image: 'https://placekitten.com/150/200',
        description: 'Description of Manga 2',
    },
    {
        id: 9,
        title: 'Manga 9',
        image: 'https://placekitten.com/150/200',
        description: 'Description of Manga 2',
    },
    {
        id: 10,
        title: 'Manga 10',
        image: 'https://placekitten.com/150/200',
        description: 'Description of Manga 2',
    }, {
        id: 11,
        title: 'Manga 11',
        image: 'https://placekitten.com/150/200',
        description: 'Description of Manga 2',
    },
    {
        id: 12,
        title: 'Manga 12',
        image: 'https://placekitten.com/150/200',
        description: 'Description of Manga 2',
    },
    {
        id: 13,
        title: 'Manga 13',
        image: 'https://placekitten.com/150/200',
        description: 'Description of Manga 2',
    },
    {
        id: 14,
        title: 'Manga 14',
        image: 'https://placekitten.com/150/200',
        description: 'Description of Manga 2',
    },
    {
        id: 15,
        title: 'Manga 15',
        image: 'https://placekitten.com/150/200',
        description: 'Description of Manga 2',
    },
    {
        id: 16,
        title: 'Manga 16',
        image: 'https://placekitten.com/150/200',
        type: 'comedia',
        description: 'Description of Manga 2',
    },

    // Adicione mais mangás aqui...
];

const CategoryPage: React.FC = () => {
    const itemsPerPage = 8;
    const [currentPage, setCurrentPage] = useState(1);
    const { type } = useParams<{ type: string }>();

    let filteredMangas = categoryMangas;

    // Filtrar os mangás com base no tipo de categoria ou mostrar todos
    if (type && type.toLowerCase() !== 'todos') {
        filteredMangas = categoryMangas.filter((manga) => manga.type === type);
    }

    const indexOfLastManga = currentPage * itemsPerPage;
    const indexOfFirstManga = indexOfLastManga - itemsPerPage;
    const currentMangas = filteredMangas.slice(indexOfFirstManga, indexOfLastManga);

    const totalPages = Math.ceil(filteredMangas.length / itemsPerPage);

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-semibold mb-4">Pesquisa: {type}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {currentMangas.map((manga) => (
                    <MangaCard key={manga.id} manga={manga} />
                ))}
            </div>
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </div>
    );
};

export default CategoryPage;
