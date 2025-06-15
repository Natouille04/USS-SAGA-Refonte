import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Button } from '../components/button.jsx';
import { ActionButton } from '../components/actionButton.jsx';
import { Card } from '../components/card.jsx';
import { Info } from '../components/info.jsx';

function Details() {
    const { id } = useParams();

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [showMessage, setShowMessage] = useState(false);

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
                    <div className="w-full h-7/25 bg-[#FF9966]"></div>
                    <div className="w-full h-3/25 bg-[#FF9966] rounded-bl-full"></div>
                </div>

            </div>

            <div className="flex flex-col justify-between h-full w-88/100">

                <div className="flex flex-col items-center justify-end h-40/100 w-full bg-[#9999FF]">
                    <div className="w-full h-96/100 bg-black rounded-tl-3xl flex flex-row justify-between px-5 pt-5">
                        <div className='flex flex-row justify-between h-full w-full'>
                            <img src={data.image} alt="Document" className="w-14/100 h-full object-cover rounded-lg" />

                            <div className='flex flex-col justify-bewteen h-full w-85/100'>
                                <div className='flex flex-row justify-between items-center h-1/5 w-full'>
                                    <h1 className='text-5xl antonio font-bold text-[#FF9900]'>{data.title}</h1>
                                    <p className='text-3xl'>ISBN : {data.isbn}</p>
                                </div>

                                <div className='w-full h-4/5 flex flex-col justify-between'>
                                    <p className='w-full h-2/3'>{data.description}</p>
                                    <p className='w-full h-1/3 text-[#C0FF89]'>{data.comment}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-start h-60/100 w-full bg-[#FF9966]">
                    <div className="w-full h-97/100 bg-black rounded-bl-3xl flex flex-col py-3 px-3">
                        <div className='w-full h-6/7'>
                            {showMessage && (
                                <div className='w-full h-full bg-black/50 absolute top-0 left-0 flex items-center justify-center'>
                                    <div className='h-1/15 w-1/10'>
                                        <ActionButton text='CLOSE' event={() => setShowMessage(false)} color='#FF9900' />
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className='w-full h-1/7 grid grid-cols-8 gap-2 border-t-1 pt-2'>
                            <ActionButton text='DETAILS' event={() => setShowMessage(true)} color='#FF9900' />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Details;