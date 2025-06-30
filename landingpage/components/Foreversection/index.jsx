import React from 'react'
import Image from 'next/image'

const ForeverSection = () => {
    return (


        <section className='pricingsection pb-20'>
            <div className='container mx-auto px-4 '>
                <div className="bg-[linear-gradient(96.04deg,#F2EEFD_0%,#E1BEFC_100%)] rounded-xl p-8 max-w-[120ch] mx-auto">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="text-3xl md:text-4xl font-bold text-[#191919] mb-6">$0 / Forever For 5 Users</h3>

                            <ul className="space-y-4 mb-6 list-disc pl-[15px]">
                                <li className="text-[#191919]">Unlimited goals, projects, tasks, and forms with AI Trials</li>
                                <li className="text-[#191919]">Up to 5 users</li>
                                <li className="text-[#191919]"> Basic Storage</li>
                            </ul>

                            <button className="text-[18px] inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 py-2 bg-white text-black hover:bg-gray-100">
                                Get It Now
                            </button>

                        </div>
                        <div className="hidden md:block">

                            <Image className="float-right" src="/assets/images/tech.svg" alt="" width={350} height={400} />

                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default ForeverSection