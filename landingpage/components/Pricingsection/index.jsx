import React from 'react'
import Image from 'next/image'

const PricingSection = () => {
    return (


        <section className='pricingsection py-20'>
            <div className='container mx-auto px-4 '>
                <div className='mx-auto'>
                    <h2 className="text-[28px] leading-snug font-semibold -tracking-[0.3px] md:text-[34px] text-center mb-2"> Simple, <span className='text-transparent bg-[linear-gradient(80.74deg,#d874fe_9.74%,#5e8dfe_93.68%)] bg-clip-text'>transparent</span> pricing</h2>
                    <p class="text-xl text-[#97989f] text-center">No hidden fees, no surprises. Pick the plan that's right for you.<div></div></p>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-15">

                        <div className="bg-white rounded-xl p-8 shadow-sm border border-[#f5f6f8]">
                            <div className="mb-8">
                                <div className="text-3xl font-bold text-[#191919] mb-2">$6.99<span className="text-lg font-normal text-[#97989f]">/Per User/month</span></div>
                                <h3 className="text-xl font-semibold text-[#191919] mb-2">Standard</h3>
                                <p className="text-[#97989f]">Packages everything you need to get started.</p>
                            </div>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3"><Image src="/assets/images/Vector.svg" alt="" width={24} height={19} /><span className="text-[#191919]">Unlimited Users</span></li>
                                <li className="flex items-center gap-3"><Image src="/assets/images/Vector.svg" alt="" width={24} height={19} /><span className="text-[#191919]">10 GB Per User</span></li>
                                <li className="flex items-center gap-3"><Image src="/assets/images/Vector.svg" alt="" width={24} height={19} /><span className="text-[#191919]">Minimal AI Dependency</span></li>
                                <li className="flex items-center gap-3"><Image src="/assets/images/Vector.svg" alt="" width={24} height={19} /><span className="text-[#191919]">General Support</span></li></ul>
                            <button className="text-[18px] inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-10 px-4 py-2 w-full bg-[#191919] text-white hover:bg-[#2a2a2a]">Start free trial</button>
                        </div>

                        <div className="bg-white rounded-xl p-8 shadow-sm border-2 border-[#b547f5]">
                            <div className="mb-8">
                                <div className="text-3xl font-bold text-[#191919] mb-2">$15.99<span className="text-lg font-normal text-[#97989f]">/Per User/month</span></div>
                                <h3 className="text-xl font-semibold text-[#191919] mb-2">Premium</h3>
                                <p className="text-[#97989f]">Unlock True AI Power</p>
                            </div>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3"><Image src="/assets/images/Vector.svg" alt="" width={24} height={19} /><span className="text-[#191919]">Unlimited Users</span></li>
                                <li className="flex items-center gap-3"><Image src="/assets/images/Vector.svg" alt="" width={24} height={19} /><span className="text-[#191919]">100 GB Per User</span></li>
                                <li className="flex items-center gap-3"><Image src="/assets/images/Vector.svg" alt="" width={24} height={19} /><span className="text-[#191919]">Higher AI Limits</span></li>
                                <li className="flex items-center gap-3"><Image src="/assets/images/Vector.svg" alt="" width={24} height={19} /><span className="text-[#191919]">Premium Support</span></li>
                                </ul>
                            <button className="text-[18px] inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-10 px-4 py-2 w-full bg-[linear-gradient(80.74deg,#d874fe_9.74%,#5e8dfe_93.68%)] text-white hover:bg-[#2a2a2a] ">Start free trial</button>
                        </div>

                        <div className="bg-white rounded-xl p-8 shadow-sm border border-[#f5f6f8]">
                            <div className="mb-8">
                                <div className="text-3xl font-bold text-[#191919] mb-2">Dedicated Plan</div>
                                <h3 className="text-xl font-semibold text-[#191919] mb-2">Enterprise Edition</h3>
                                <p className="text-[#97989f]">Custom Deployment for Enterprises</p>
                            </div>
                                                        <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3"><Image src="/assets/images/Vector.svg" alt="" width={24} height={19} /><span className="text-[#191919]">Unlimited Users</span></li>
                                <li className="flex items-center gap-3"><Image src="/assets/images/Vector.svg" alt="" width={24} height={19} /><span className="text-[#191919]">Unlimited Storage</span></li>
                                <li className="flex items-center gap-3"><Image src="/assets/images/Vector.svg" alt="" width={24} height={19} /><span className="text-[#191919]">Unlimited AI</span></li>
                                <li className="flex items-center gap-3"><Image src="/assets/images/Vector.svg" alt="" width={24} height={19} /><span className="text-[#191919]">Premium Support</span></li>
                                </ul>
                            <button className="text-[18px] inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-10 px-4 py-2 w-full bg-[#191919] text-white hover:bg-[#2a2a2a]">Start free trial</button>
                        </div>

                    </div>

                </div>
            </div>
        </section>


    )
}

export default PricingSection