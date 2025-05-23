import { useState, useEffect } from 'react';
import { Button } from '../components/button.jsx';
import { Card } from '../components/card.jsx';

function DisplayDocument(data, filter = null) {
    if (filter === null) {
        return (
            data.map((item, index) => (
                <Card key={index} title={item.title} image={item.image} id={item.id} />
            ))
        );
    }

    else {
        return (
            data.filter((item) => item.title.toLowerCase().includes(filter.toLowerCase())).map((item, index) => (
                <Card key={index} title={item.title} image={item.image} id={item.id} />
            ))
        );
    }
}

function Archive() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch('http://localhost:8000/api/document/all')
            .then(response => {
                if (!response.ok) throw new Error('Erreur réseau');
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
                Erreur : {error}
            </div>
        );
    }

    return (
        <div className="h-screen bg-black h-full w-full p-3 flex flex-row text-[#FF9900] antonio">
            <div className="flex flex-col justify-between h-full w-12/100">

                <div className="flex flex-col h-28/100 w-full">
                    <div className="w-full h-45/100 bg-[#CC99CC] mb-2"></div>
                    <div className="w-full h-55/100 flex flex-col">
                        <div className="w-full h-1/3 bg-[#9999FF]"></div>
                        <div className="w-full h-2/3 bg-[#9999FF] rounded-bl-full"></div>
                    </div>
                </div>

                <div className="flex flex-col h-71/100 w-full">
                    <div className="w-full h-3/25 bg-[#CC6666] rounded-tl-full mb-2"></div>
                    <div className="w-full h-7/25 bg-[#CC6666] mb-2"></div>
                    <div className="w-full h-2/25 bg-[#FF9900] mb-2"></div>
                    <div className="w-full h-12/25 bg-[#FF9966]"></div>
                </div>

            </div>

            <div className="flex flex-col justify-between h-full w-88/100">

                <div className="flex flex-col h-28/100 w-full bg-[#9999FF]">
                    <div className="w-full h-90/100 bg-black rounded-bl-3xl flex md:flex-row flex-col justify-between px-3 pb-5">
                        <div>
                            <h1 className="lg:text-7xl md:text-6xl text-5xl font-semibold mb-3 h-35/100">ARCHIVE</h1>
                        </div>

                        <div className="md:w-15/100 w-full md:h-auto h-50/100 flex md:flex-col flex-row justify-between py-5">

                            <div className="md:h-45/100 h-full md:w-auto w-48/100 flex-col text-black md:text-xl text-lg">
                                <Button text='ACCEUIL' url='/' color='#FF9900' />
                            </div>

                            <div className="md:h-45/100 h-full md:w-auto w-48/100 flex-col text-black text-lg">
                                <Button text='SUGGEREZ UN DOCUMENT' url='#' color='#CC6666' />
                            </div>

                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-end h-71/100 w-full bg-[#CC6666]">
                    <div className="w-full h-96/100 bg-black rounded-tl-3xl p-5 flex flex-col items-center justify-between">
                        <input type='text' className='w-full h-13 border-2 p-2 text-2xl outline-0 mb-3' placeholder='RECHERCHER UN DOCUMENT' onChange={(e) => setSearch(e.target.value)}></input>

                        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-4 gap-y-6 w-full h-full overflow-y-scroll">
                            {
                                DisplayDocument(data, search)
                            }
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Archive;