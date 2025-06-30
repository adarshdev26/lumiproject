import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="bg-[linear-gradient(125deg,rgba(115,103,240,0.05)_0%,rgba(78,205,196,0.05)_25%,rgba(115,103,240,0.08)_50%,rgba(78,205,196,0.05)_75%,rgba(115,103,240,0.05)_100%)] border-t border-[#d5d5d5] py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <a className="text-2xl font-bold" href="/">
            <Image src="/assets/images/lumilogo.svg" alt="" width={190} height={70} />
          </a>
          <nav className="flex flex-wrap items-center gap-6 md:gap-8"><a className="text-[#191919] hover:text-[#a67db7] transition-colors" href="/careers">Careers</a><a className="text-[#191919] hover:text-[#a67db7] transition-colors" href="/vision">Vision</a><a className="text-[#191919] hover:text-[#a67db7] transition-colors" href="/terms">Terms and conditions</a><a className="text-[#191919] hover:text-[#a67db7] transition-colors" href="/privacy">Privacy</a><a className="text-[#191919] hover:text-[#a67db7] transition-colors" href="/disclaimer">Disclaimer</a></nav>
          <div className="flex items-center gap-6"><a className="text-[#191919] hover:text-[#a67db7] transition-colors" href="mailto:contact@lumiproject.com"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg><span className="sr-only">Email</span></a><a className="text-[#191919] hover:text-[#a67db7] transition-colors" href="https://twitter.com/lumiproject"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg><span className="sr-only">Twitter</span></a><a className="text-[#191919] hover:text-[#a67db7] transition-colors" href="https://facebook.com/lumiproject"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg><span className="sr-only">Facebook</span></a><a className="text-[#191919] hover:text-[#a67db7] transition-colors" href="https://wa.me/lumiproject"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg><span className="sr-only">WhatsApp</span></a></div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
