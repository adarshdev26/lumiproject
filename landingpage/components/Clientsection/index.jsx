import React from 'react'
import Image from 'next/image'

const ClientSection = () => {
    return (


        <section className='clientsection py-20'>
            <div className='container mx-auto px-4 '>
                <div className='max-w-[120ch] mx-auto'>
                    <h2 class="text-[28px] leading-snug font-semibold -tracking-[0.3px] md:text-[34px] text-center mb-10 "> <span className="text-transparent bg-[linear-gradient(80.74deg,#d874fe_9.74%,#5e8dfe_93.68%)] bg-clip-text">Our clients</span> from the last decade</h2>
                    <div className="grid grid-cols-2 place-content-center place-items-center gap-4 text-center md:flex md:flex-wrap md:justify-center md:gap-8">
                        <Image className="mx-auto" src="/assets/images/client1.svg" alt="" width={120} height={30} />
                        <Image className="mx-auto" src="/assets/images/client2.svg" alt="" width={120} height={30} />
                        <Image className="mx-auto" src="/assets/images/client3.svg" alt="" width={120} height={30} />
                        <Image className="mx-auto" src="/assets/images/client4.svg" alt="" width={120} height={30} />
                        <Image className="mx-auto" src="/assets/images/client5.svg" alt="" width={120} height={30} />
                    </div>
                </div>
            </div>
        </section>


    )
}

export default ClientSection