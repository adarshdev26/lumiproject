import React from 'react'
import Image from 'next/image'

const SugestionsSection = () => {
    return (

        <section className='sugestionsection  py-20'>
            <div className='container mx-auto px-4 flex flex-col md:flex-row items-center gap-8 md:gap-12'>

                <div className="w-full md:w-2/5 space-y-6 text-center md:text-left">
                    <h2 className="text-[28px] font-bold text-[#191919] md:text-[34px] pb-5">Manage Tasks with <span className='text-transparent bg-[linear-gradient(80.74deg,#d874fe_9.74%,#5e8dfe_93.68%)] bg-clip-text'>AI-Powered Suggestions</span> and Completions</h2>
                    <p className="text-[#6b6b7f] text-lg">Experience the perfect blend of traditional task management and cutting-edge AI technology. Our platform allows you to organize tasks manually while leveraging AI-powered suggestions to optimize your workflow.</p>
                    <p className="text-[#6b6b7f] text-lg">Use AI to predict task priorities, suggest deadlines, and even auto-complete repetitive tasks, saving you time and effort. Whether you're sorting tasks into categories like Backlog, To-Do, or In-Progress, or looking for intelligent insights, we've got you covered.</p>
                </div>

                <div class="w-full md:w-3/5 rounded-lg overflow-hidden shadow-xl">
                    <Image src="/assets/images/suggestion.svg" alt="" width={1200} height={600} />
                </div>



            </div>
        </section>






    )
}

export default SugestionsSection
