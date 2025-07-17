import { useState, useEffect } from 'react';
import { Button } from '../components/button.jsx';
import { Block } from '../components/block.jsx';

function Home() {
  const [documentData, setDocumentData] = useState(null);
  const [bulletinsData, setBulletinsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://192.168.1.142:8000/api/document/getLastDocuments?limit=15')
      .then(response => {
        if (!response.ok) throw new Error('Erreur réseau');
        return response.json();
      })
      .then(documentData => {
        setDocumentData(documentData);
        console.log(documentData);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });

    fetch('http://192.168.1.142:8000/api/document/getLastBulletins?limit=15')
      .then(response => {
        if (!response.ok) throw new Error('Erreur réseau');
        return response.json();
      })
      .then(bulletinsData => {
        setBulletinsData(bulletinsData);
        setLoading(false);
        console.log(bulletinsData);
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
        Erreur : {error}
      </div>
    );
  }

  return (
    <div className="h-screen bg-black h-full w-full p-1 flex flex-row text-[var(--primary)] antonio">
      <div className="flex flex-col justify-between h-full w-12/100">

        <div className="flex flex-col h-20/100 w-full">
          <div className="w-full h-45/100 bg-[var(--purple)] mb-2"></div>
          <div className="w-full h-55/100 flex flex-col">
            <div className="w-full h-1/3 bg-[var(--blue)]"></div>
            <div className="w-full h-2/3 bg-[var(--blue)] rounded-bl-full"></div>
          </div>
        </div>

        <div className="flex flex-col h-79/100 w-full">
          <div className="w-full h-3/25 bg-[var(--red)] rounded-tl-full mb-2"></div>
          <div className="w-full h-7/25 bg-[var(--red)] mb-2"></div>
          <div className="w-full h-2/25 bg-[var(--primary)] mb-2"></div>
          <div className="w-full h-9/25 bg-[var(--beige)]"></div>
          <div className="w-full h-4/25 bg-[var(--beige)] rounded-bl-full"></div>
        </div>

      </div>

      <div className="flex flex-col justify-between h-full w-88/100">

        <div className="flex flex-col h-20/100 w-full bg-[var(--blue)]">
          <div className="w-full h-90/100 bg-black rounded-bl-3xl flex md:flex-row flex-col justify-between px-3 pb-2">
            <div className='h-50/100 flex flex-col justify-start pb-1'>
              <h1 className="font-semibold xs:text-6xl text-3xl">USS-SAGA</h1>
              <p className="text-xs">L'APPEL DES ETOILE</p>
            </div>

            <div className='h-60/100 w-full flex flex-row justify-end grid grid-cols-2 gap-x-2 gap-y-1'>
              <Button text='ARCHIVE' url='/archive' color='var(--primary)' height='full' />
              <Button text='CHARTE' url='/charte' color='var(--red)' height='full' />
              <Button text='CONTACT' url='/contact' color='var(--blue)' height='full' />
              <Button text='PARTENAIRE' url='/partenaire' color='var(--purple)' height='full' />
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-end h-29/100 w-full bg-[var(--red)]">
          <div className="w-full h-93/100 bg-black rounded-tl-3xl p-3 flex flex-col items-center">
            <div className='w-full h-full flex flex-row justify-between pb-4 border-b-2 border-[var(--primary)]'>
              <img src={documentData[0].image} alt="" className='rounded-xl w-2/5' />

              <div className='flex flex-col h-full w-3/5 px-2 overflow-hidden'>
                <h1 className='text-lg antonio font-bold text-[var(--primary)]'>{documentData[0].title}</h1>
                <p className='text-xs'>ISBN : {documentData[0].isbn}</p>
                <p className="w-full text-sm break-all overflow-y-auto">
                  {documentData[0].description}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-start h-49/100 w-full bg-[var(--beige)]">
          <div className="w-full h-96/100 bg-black rounded-bl-3xl p-3 pt-0 flex flex-col items-center">
            <h2 className='text-xl w-full text-left'>Dernieres sorties : </h2>

            <div className='w-full h-45/100 overflow-x-scroll flex flex-row mt-3 pb-3 gap-x-3'>
              {documentData.slice(1).map((doc, index) => (
                <a
                  href={`/archive/${doc.id}`}
                  className='h-full w-23 min-w-23 flex justify-center items-end relative rounded-xl overflow-hidden'
                  style={{ backgroundImage: `url(${doc.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                  key={index}
                >
                  <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent z-10"></div>
                  <p className='text-sm z-20 p-1 text-[var(--primary)]'>{doc.title}</p>
                </a>

              ))}
            </div>

            <h2 className='text-xl mt-2 w-full text-left'>Derniers bulletins : </h2>

            <div className='w-full h-45/100 overflow-x-scroll flex flex-row mt-3 pb-3 gap-x-3'>
              {bulletinsData.map((doc, index) => (
                <a
                  href={`/archive/${doc.id}`}
                  className='h-full w-23 min-w-23 flex justify-center items-end relative rounded-xl overflow-hidden'
                  style={{ backgroundImage: `url(${doc.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                  key={index}
                >
                  <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent z-10"></div>
                  <p className='text-xs z-20 p-1 text-[var(--primary)]'>{doc.name}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;