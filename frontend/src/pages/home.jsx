import { useState, useEffect } from 'react';
import { Button } from '../components/button.jsx';

function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/api/document/getLast?limit=4')
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
          <div className="w-full h-90/100 bg-black rounded-bl-3xl flex flex-row justify-between px-3 pb-5">
            <div>
              <h1 className="lg:text-7xl md:text-6xl font-semibold mb-3 h-35/100">USS-SAGA</h1>
              <p className="lg:text-3xl mdtext-3xl font-semibold">L'APPEL DES ETOILES</p>
            </div>

            <div className="w-25/100 flex flex-col justify-end">
              <div className="h-60/100 grid grid-cols-2 gap-x-4 gap-y-3 text-black text-xl">
                <Button text='ARCHIVE' url='/archive' color='#9999FF' />
                <Button text='CHARTE' url='#' color='#FF9900' />
                <Button text='CONTACT' url='#' color='#FF9900' />
                <Button text='COMPTE' url='#' color='#9999FF' />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-end h-71/100 w-full bg-[#CC6666]">
          <div className="w-full h-96/100 bg-black rounded-tl-3xl p-5 flex lg:flex-row flex-col items-center justify-between">

            <div className="lg:h-90/100 lg:w-70/100 h-50/100 w-full lg:mx-5 mx-2 flex flex-row justify-between lg:border-r-2 lg:border-b-0 lg:pr-5 border-b-2 pb-5">
              <img src={data[0].image} alt="Logo" className="w-2/5 h-full mr-5" />
              <div className='w-3/5 flex flex-col'>
                <h2 className="lg:text-6xl text-2xl font-semibold">{data[0].title}</h2>
                <p className='mt-2'>
                  {data[0].authors.map((author, index) => (
                    <span key={index}>
                      {index > 0 && ' - '}
                      {author.first_name}
                    </span>
                  ))}
                </p>

                <p className="font-semibold mt-2 text-xs lg:text-2xl">
                  {data[0].description.length > 500
                    ? data[0].description.slice(0, 500) + '...'
                    : data[0].description}
                </p>
              </div>
            </div>

            <div className="lg:w-30/100 lg:h-full h-50/100 w-full h-full ml-2 py-5 flex lg:flex-col flex-row justify-between">
              {data.slice(1).map((item, index) => (
                <div className='lg:h-30/100 lg:w-auto w-30/100 flex flex-row' key={index}>
                  <img src={item.image} alt="Logo" className="lg:w-25/100 lg:block w-full h-full hidden" />
                  <div style={{ backgroundImage: item.image }} className='lg:hidden block'></div>
                  <div className='w-75/100 ml-2 flex flex-col lg:block hidden'>
                    <p className='text-2xl'>{item.title}</p>
                    <p className='text-sm w-80/100'>
                      {
                        item.description.length > 250
                          ? item.description.slice(0, 250) + '...'
                          : item.description
                      }
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Home;