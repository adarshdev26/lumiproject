import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
  return (

    <section className='herosection bg-[linear-gradient(180deg,#BCBFFF_0%,#F6EAFF_100%)] py-[60px]'>
      <div className='container mx-auto px-4'>
        <h2 className='mx-auto mb-6 max-w-[20ch] text-center text-[clamp(24px,8vw,88px)] leading-[110%] font-semibold tracking-tight text-balance'>AI Powered Agile <span className='text-transparent bg-[linear-gradient(80.74deg,#d874fe_9.74%,#5e8dfe_93.68%)] bg-clip-text'>Project Management</span></h2>
        <p className='text-[#191919] text-xl md:text-2xl leading-relaxed max-w-3/4 mx-auto text-center mb-6'>Break free from outdated processes with LumiProject's intelligent Agile solution. Our AI-driven platform streamlines workflows, enhances team productivity, and delivers powerful insights in real-time. Experience the perfect balance of automation and collaboration as LumiProject transforms how your teams design, build, and deliver— all backed by sophisticated AI technology.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a className="text-[18px] inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-10 py-2 bg-[#191919] text-white hover:bg-[#2a2a2a] px-8" href="/try">Try Now</a>
          <a className="text-[18px] inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input hover:text-accent-foreground h-10 py-2 bg-white hover:bg-gray-50 px-8" href="#how-it-works">See How It Works</a>
        </div>
        <Image className="mx-auto" src="/assets/images/gifLandingPage.gif" alt="" width={1100} height={500} />
      </div>
    </section>






  )
}

export default HeroSection
