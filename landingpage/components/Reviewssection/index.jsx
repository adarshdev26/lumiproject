import React from 'react'
import Image from 'next/image'

const ReviewsSection = () => {
    return (


        <section className='everythingsection py-20 bg-[#eef5ff]'>
            <div className='container mx-auto px-4 '>
                <div className='mx-auto'>
                    <h2 className="text-[28px] leading-snug font-semibold -tracking-[0.3px] md:text-[34px] text-center"> Used by <span className='text-transparent bg-[linear-gradient(80.74deg,#d874fe_9.74%,#5e8dfe_93.68%)] bg-clip-text'>millions of productive</span> organizations!</h2>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 mt-15">

                        <div className="rounded-lg border bg-white p-6 shadow-md/5 border-[#eaeaea]">
                            <div className="mb-6 grid grid-cols-[48px_1fr] gap-4">
                                <Image src="/assets/images/danny.jpeg" alt="" loading="lazy" decoding="async" fetchpriority="auto" width="48" height="48" className="size-12 rounded-full" />

                                <div>
                                    <p className="mb-1 font-semibold">Allisic</p>
                                    <p className="text-light-grey-text text-balance">CEO of BIOKRIPT</p>
                                </div>
                            </div>
                            <p className="text-md italic">"Lumiproject is amazing stuff. I use it everyday and it helps me to maintain by Projects properly."</p>
                        </div>


                        <div className="rounded-lg border bg-white p-6 shadow-md/5 border-[#eaeaea]">
                            <div className="mb-6 grid grid-cols-[48px_1fr] gap-4">
                                <Image src="/assets/images/sandra.jpeg" alt="" loading="lazy" decoding="async" fetchpriority="auto" width="48" height="48" className="size-12 rounded-full" />

                                <div>
                                    <p className="mb-1 font-semibold">Akif Siddiqui</p>
                                    <p className="text-light-grey-text text-balance">SAP Lead at Deloitte</p>
                                </div>
                            </div>
                            <p className="text-md italic">"We love your product and are so glad we can help spread the news!"</p>
                        </div>



                        <div className="rounded-lg border bg-white p-6 shadow-md/5 border-[#eaeaea]">
                            <div className="mb-6 grid grid-cols-[48px_1fr] gap-4">
                                <Image src="/assets/images/leo.jpeg" alt="" loading="lazy" decoding="async" fetchpriority="auto" width="48" height="48" className="size-12 rounded-full" />

                                <div>
                                    <p className="mb-1 font-semibold">Phillip Thomas</p>
                                    <p className="text-light-grey-text text-balance">Freelancer</p>
                                </div>
                            </div>
                            <p className="text-md italic">"The best Project Management App is: LumiProject, made my Team free of Project Managers"</p>
                        </div>


                        <div className="rounded-lg border bg-white p-6 shadow-md/5 border-[#eaeaea]">
                            <div className="mb-6 grid grid-cols-[48px_1fr] gap-4">
                                <Image src="/assets/images/tilbe.jpg" alt="" loading="lazy" decoding="async" fetchpriority="auto" width="48" height="48" className="size-12 rounded-full" />

                                <div>
                                    <p className="mb-1 font-semibold">Sandra Tilbe</p>
                                    <p className="text-light-grey-text text-balance">CTO of Metagroup</p>
                                </div>
                            </div>
                            <p className="text-md italic">“We love your product and are so glad we can help spread the news!”</p>
                        </div>


                    </div>

                    <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
                        <a class="text-[18px] inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-10 py-2 bg-[#191919] text-white hover:bg-[#2a2a2a] px-8" href="/try">See all reviews</a>
                    </div>

                </div>
            </div>
        </section>


    )
}

export default ReviewsSection