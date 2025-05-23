import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Button } from '../components/button.jsx';
import { Card } from '../components/card.jsx';
import { Info } from '../components/info.jsx';

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

                <div className="flex flex-col items-center justify-end h-60/100 w-full bg-[#9999FF]">
                    <div className="w-full h-90/100 bg-black rounded-tl-3xl flex flex-row justify-between px-5 pt-5">
                        <img src={data.image}></img>
                        <div className='w-90/100 pl-5 flex flex-col'>
                            <h1 className="text-7xl mb-2">{data.title}</h1>
                            <p className='text-2xl my-2'>ISBN : {data.isbn}</p>
                            <p className="w-full max-w-300 break-words whitespace-normal mb-2">{data.description}</p>
                            <p className='text-[#C0FF89]'>{data.comment}</p>

                            <div className='w-full border-t-2 mt-4 pt-4 flex flex-row justify-between'>
                                <div className='w-70/100'>
                                    <Info data={data.authors} text="Auteur(s)" />
                                    <Info data={data.illustrators} text="Illustrateur(s)" />
                                    <Info data={data.traductors} text="Traducteur(s)" />
                                    <Info data={data.correctors} text="Correcteur(s)" />
                                </div>

                                <div className='w-30/100 h-70/100 grid grid-cols-2 gap-4'>
                                    <Button text='METTRE EN FAVORIE' url='#' color='#FF9900' />
                                    <Button text='LIRE' url='#' color='#9999FF' />
                                    <Button text='COMMENTAIRE' url='#' color='#CC6666' />
                                    <Button text='PARTAGEZ' url='#' color='#CC99CC' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-start h-40/100 w-full bg-[#FF9966]">
                    <div className="w-full h-96/100 bg-black rounded-bl-3xl flex flex-col py-7 px-5">
                        <p className='text-2xl'>Autres documents :</p>
                        <div className='w-full h-full flex flex-row overflow-x-auto space-x-4 mt-5 pr-5'>
                            {Array(20).fill(0).map((_, i) => (
                                <div key={i} className="min-w-[200px]">
                                    <Card id={i + 1} title='test' image={data.image} url='#' index={i} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Details;