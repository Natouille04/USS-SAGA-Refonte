import { useState, useEffect } from 'react';
import { Button } from '../components/button.jsx';
import { Block } from '../components/block.jsx';

function Contact() {
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
                    <div className="w-full h-4/25 bg-[var(--beige)]"></div>
                </div>

            </div>

            <div className="flex flex-col justify-between h-full w-88/100">

                <div className="flex flex-col h-20/100 w-full bg-[var(--blue)]">
                    <div className="w-full h-90/100 bg-black rounded-bl-3xl flex md:flex-row flex-col justify-between px-3 pb-2">
                        <div className='h-70/100 flex flex-col justify-start pb-1'>
                            <h1 className="font-semibold text-6xl">CONTACT</h1>
                        </div>
                        <Button text='ARCHIVE' url='/archive' color='var(--primary)' height='30%' />
                    </div>
                </div>

                <div className="flex flex-col justify-end h-79/100 w-full bg-[var(--red)]">
                    <div className="w-full h-97/100 bg-black rounded-tl-3xl p-4 flex flex-col items-center">
                        <h2 className='w-full pb-2 text-3xl text-left text-[var(--primary)]'>CONTACT : </h2>

                        <p className='text-lg text-[var(--purple)]'>Si vous voulez me contacter recopier l'une des adresses suivantes et utiliser votre programme courriel habituel : </p>

                        <a className='w-full text-xl text-left text-[var(--blue)] underline py-2' href="mailto:USS-SAGA@outlook.com">USS-SAGA@outlook.com</a>
                        <a className='w-full text-xl text-left text-[var(--blue)] underline' href="mailto:ncc.200960@gmail.com">ncc.200960@gmail.com</a>

                        <p className='w-full text-xl text-[var(--purple)] text-left pt-3'>
                            Vous pouvez egalement me contacter via MP sur 
                            <a class="text-decoration-none mx-1 text-[var(--blue)] underline" href="http://www.communaute-francophone-star-trek.net/">ce forum</a> 
                            (Pseudo : SAGA)
                        </p>

                        <h2 className='w-full pt-5 pb-3 text-3xl text-left text-[var(--primary)]'>EQUIPAGE : </h2>

                        <p className='w-full text-xl text-left text-[var(--purple)]'>CAPITAINE : Pascal</p>
                        <p className='w-full text-xl text-left text-[var(--purple)]'>INGENIEUR : Natouille</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;