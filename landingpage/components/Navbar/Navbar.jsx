import React from 'react'
import Image from 'next/image' 

const Navbar = () => {
  return (
   <header className="border-b border-[#d5d5d5] py-2">
<div className="container mx-auto px-4">
<div className="flex items-center justify-between h-full">
<a className="text-2xl font-bold" href="/">
<Image src="/assets/images/lumilogo.svg" alt="" width={190} height={70} />
</a>
<nav className="hidden md:flex items-center space-x-8">
<a className="text-lg text-[#191919] hover:text-[#a67db7] transition-colors" href="#features">Features</a>
<a className="text-lg text-[#191919] hover:text-[#a67db7] transition-colors" href="#pricing">Pricing</a>
<a className="text-lg text-[#191919] hover:text-[#a67db7] transition-colors" href="#contact">Contact</a>
</nav>
<div className="flex items-center space-x-4">
<a
  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-[18px] font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 py-2 bg-[#6aa4c9] text-white hover:bg-[#a47bb7]"
  href="/auth/signup"
>
  Get Started
</a>
<a className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-10 px-4 py-2 bg-[#191919] text-white hover:bg-[#2a2a2a] text-[18px]" href="/auth/signin">Login</a>
</div>
</div>
</div>
</header>
  )
}

export default Navbar;
