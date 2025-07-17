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
        fetch('http://192.168.1.142:8000/api/document/all/' + id)
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
            <div className="h-screen w-screen flex items-center justify-center bg-black text-[var(--primary)] text-4xl antonio">
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
        <div className="h-screen bg-black h-full w-full p-3 flex flex-row text-[var(--primary)] antonio">
            <div className="flex flex-col justify-between h-full w-12/100">

                <div className="flex flex-col h-28/100 w-full">
                    <div className="w-full h-55/100 flex flex-col mb-2">
                        <div className="w-full h-2/3 bg-[var(--blue)] rounded-tl-full"></div>
                        <div className="w-full h-1/3 bg-[var(--blue)]"></div>
                    </div>
                    <div className="w-full h-45/100 bg-[var(--purple)]"></div>
                </div>

                <div className="flex flex-col h-71/100 w-full">
                    <div className="w-full h-12/25 bg-[var(--red)] mb-2"></div>
                    <div className="w-full h-3/25 bg-[var(--primary)] mb-2"></div>
                    <div className="w-full h-7/25 bg-[var(--beige)]"></div>
                    <div className="w-full h-3/25 bg-[var(--beige)] rounded-bl-full"></div>
                </div>

            </div>

            <div className="flex flex-col justify-between h-full w-88/100">

                <div className="flex flex-col items-center justify-end h-25/100 w-full bg-[var(--blue)]">
                    <div className="w-full h-92/100 bg-black rounded-tl-3xl flex flex-row justify-between px-4 pt-4">
                        <div className='flex flex-row justify-between h-full w-full gap-x-2'>
                            <img src={data.image} alt="Document" className="w-35/100 h-full object-cover rounded-lg" />

                            <div className='flex flex-col justify-bewteen h-full w-85/100'>
                                <h1 className='text-3xl antonio font-bold'>{data.title}</h1>
                                <p>Titre original : {data.og_title}</p>
                                <p>ISBN: {data.isbn}</p>
                                <p>Capitaine: {data.capitaine.first_name} {data.capitaine.last_name}</p>
                                <p>Vaisseau: {data.vaisseau.prefix}-{data.vaisseau.name}</p>
                                <p>Planète: {data.planete.name}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-start h-75/100 w-full bg-[var(--beige)] rounded-tr-3xl">
                    <div className="w-full h-97/100 bg-black rounded-bl-3xl flex flex-col py-3 px-3">
                        <div className='w-full h-8/9 p-2'>
                            <div className='h-80/100'>
                                <p className='h-auto max-h-55/100 overflow-y-auto mb-1'>{data.description}</p>
                                {data.comment && (<p className='break-all h-auto max-h-15 text-[var(--green)] overflow-y-auto mb-3'>{data.comment}</p>)}
                            </div>

                            <div className='h-20/100'>
                                {data.authors && (
                                    <div className='flex flex-row gap-x-1'>
                                        <p>Auteur(s) :</p>
                                        {data.authors.map((item, index) => (
                                            <a href='#' className="gap-x-1" key={index}>
                                                {item.first_name}{index < data.authors.length - 1 ? ', ' : ''}
                                            </a>
                                        ))}
                                    </div>
                                )}

                                {data.illustrators && (
                                    <div className='flex flex-row gap-x-1'>
                                        <p>Illustrateur(s) :</p>
                                        {data.illustrators.map((item, index) => (
                                            <a href='#' className="gap-x-1" key={index}>
                                                {item.first_name}{index < data.illustrators.length - 1 ? ', ' : ''}
                                            </a>
                                        ))}
                                    </div>
                                )}

                                {data.traductors && (
                                    <div className='flex flex-row gap-x-1'>
                                        <p>Traducteur(s) :</p>
                                        {data.traductors.map((item, index) => (
                                            <a href='#' className="gap-x-1" key={index}>
                                                {item.first_name}{index < data.traductors.length - 1 ? ', ' : ''}
                                            </a>
                                        ))}
                                    </div>
                                )}

                                {data.correctors && (
                                    <div className='flex flex-row gap-x-1'>
                                        <p>Correcteur(s) :</p>
                                        {data.correctors.map((item, index) => (
                                            <a href='#' className="gap-x-1" key={index}>
                                                {item.first_name}{index < data.correctors.length - 1 ? ', ' : ''}
                                            </a>
                                        ))}
                                    </div>
                                )}

                            </div>

                        </div>

                        <div className='w-full h-1/9 grid grid-cols-1 gap-2 border-t-1 pt-2'>
                            <Button text='RETOUR' url='/archive' color='var(--blue)' />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Details;