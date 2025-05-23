import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Button } from '../components/button.jsx';
import { Card } from '../components/card.jsx';

function Details() {
    const { id } = useParams();

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/api/document/all/' + id)
            .then(response => {
                if (!response.ok) {
                    if (response.status === 404) {
                        throw new Error('Document Introuvable');
                    }

                    else if (response.status === 500) {
                        throw new Error('Erreur interne du serveur');
                    }

                    else {
                        throw new Error('Erreur inconnue');
                    }
                }
                return response.json();
            })
            .then(data => {
                setData(data);
                setLoading(false);

                console.log(data);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="h-screen w-screen flex items-center justify-center bg-black text-[#FF9900] text-4xl antonio">
                Chargement...
            </div>
        );
    }

    if (error) {
        return (
            <div className="h-screen w-screen flex items-center justify-center bg-black text-red-500 text-4xl antonio">
                {error}
            </div>
        );
    }

    return (
        <div className="h-screen bg-black h-full w-full p-3 flex flex-row text-[#FF9900] antonio">
            <div className="flex flex-col justify-between h-full w-12/100">

                <div className="flex flex-col h-28/100 w-full">
                    <div className="w-full h-55/100 flex flex-col mb-2">
                        <div className="w-full h-2/3 bg-[#9999FF] rounded-tl-full"></div>
                        <div className="w-full h-1/3 bg-[#9999FF]"></div>
                    </div>
                    <div className="w-full h-45/100 bg-[#CC99CC]"></div>
                </div>

                <div className="flex flex-col h-71/100 w-full">
                    <div className="w-full h-12/25 bg-[#CC6666] mb-2"></div>
                    <div className="w-full h-3/25 bg-[#FF9900] mb-2"></div>
                    <div className="w-full h-7/25 bg-[#FF9966] mb-2"></div>
                    <div className="w-full h-3/25 bg-[#FF9966] rounded-bl-full"></div>
                </div>

            </div>

            <div className="flex flex-col justify-between h-full w-88/100">

                <div className="flex flex-col justify-end h-60/100 w-full bg-[#9999FF]">
                    <div className="w-full h-90/100 bg-black rounded-tl-3xl flex flex-row justify-between px-5 pt-5">
                        <img src={data.image}></img>
                        <div className='w-90/100 pl-5 flex flex-col'>
                            <h1 className="text-7xl mb-2">{data.title}</h1>
                            <p className="w-full max-w-300 break-words whitespace-normal mb-2">{data.description}</p>
                            <p className='text-[#C0FF89]'>{data.comment}</p>

                            <div className='w-full border-t-2 mt-4 pt-4'>
                                <p className='text-2xl'>Auteur(s) :
                                    {data.authors.map((author, index) => (
                                        <span key={index}>
                                            {index > 0 && ' - '}
                                            {author.first_name}
                                        </span>
                                    ))}</p>

                                <p className='text-2xl'>Illustrateur(s) :
                                    {data.illustrators.map((author, index) => (
                                        <span key={index}>
                                            {index > 0 && ' - '}
                                            {author.first_name}
                                        </span>
                                    ))}
                                </p>

                                <p className='text-2xl'>Traducteur(s) :
                                    {data.traductors.map((author, index) => (
                                        <span key={index}>
                                            {index > 0 && ' - '}
                                            {author.first_name}
                                        </span>
                                    ))}
                                </p>

                                <p className='text-2xl'>Correcteur(s) :
                                    {data.correctors.map((author, index) => (
                                        <span key={index}>
                                            {index > 0 && ' - '}
                                            {author.first_name}
                                        </span>
                                    ))}
                                </p>

                                <p className='text-2xl'>ISBN : {data.isbn}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-start h-40/100 w-full bg-[#FF9966]">
                    <div className="w-full h-96/100 bg-black rounded-bl-3xl px-5 pb-5 flex lg:flex-row flex-col items-center justify-between">

                    </div>
                </div>

            </div>
        </div>
    );
}

export default Details;