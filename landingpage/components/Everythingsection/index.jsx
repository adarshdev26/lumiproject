import React from 'react'
import Image from 'next/image'

const EverythingSection = () => {
    return (


        <section className='everythingsection py-20 bg-[#eef5ff]'>
            <div className='container mx-auto px-4 '>
                <div className='mx-auto'>
                    <h2 className="text-[28px] leading-snug font-semibold -tracking-[0.3px] md:text-[34px] text-center"> Get <span className='text-transparent bg-[linear-gradient(80.74deg,#d874fe_9.74%,#5e8dfe_93.68%)] bg-clip-text'>Everything</span> Done</h2>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 mt-15">


                        <div className="rounded-lg bg-white p-6 shadow-md/5">

                            <Image className="mb-6" src="/assets/images/launch 1.svg" alt="" width={80} height={120} />
                            <p class="font-display mb-2 text-xl/tight font-semibold mb-6">Precision User Tracking</p>
                            <p class="text-[rgba(107,107,127,1)] text-lg leading-relaxed">Unlock advanced analytics with our intuitive platform. Dive deep into user insights and make data-driven decisions effortlessly. Track user behavior, engagement, and project progress in real-time</p>

                        </div>

                        <div className="rounded-lg bg-white p-6 shadow-md/5">

                            <Image className="mb-6" src="/assets/images/money-bag 1.svg" alt="" width={80} height={120} />
                            <p class="font-display mb-2 text-xl/tight font-semibold mb-6">Meet lumiproject: Your AI Assistant</p>
                            <p class="text-[rgba(107,107,127,1)] text-lg leading-relaxed">Experience seamless project management with lumiproject, your AI-powered companion that keeps everything on track. From task allocation to deadline reminders, lumiproject is your 24/7 project management ally.</p>

                        </div>

                        <div className="rounded-lg bg-white p-6 shadow-md/5">

                            <Image className="mb-6" src="/assets/images/cuckoo-clock 1.svg" alt="" width={80} height={120} />
                            <p class="font-display mb-2 text-xl/tight font-semibold mb-6">Visual Project Progress</p>
                            <p class="text-[rgba(107,107,127,1)] text-lg leading-relaxed">See your project's success unfold with our intuitive visual overview. One click reveals actionable insights, beautiful charts, and progress indicators that make project tracking a breeze.</p>

                        </div>

                        <div className="rounded-lg bg-white p-6 shadow-md/5">

                            <Image className="mb-6" src="/assets/images/launch 1.svg" alt="" width={80} height={120} />
                            <p class="font-display mb-2 text-xl/tight font-semibold mb-6">All In One Solution</p>
                            <p class="text-[rgba(107,107,127,1)] text-lg leading-relaxed">Simplify your workflow with the ultimate project management tool. Streamline tasks, enhance collaboration, and boost productivity all in one place. Say goodbye to juggling multiple tools and hello to efficiency.</p>

                        </div>





                    </div>
                </div>
            </div>
        </section>


    )
}

export default EverythingSection