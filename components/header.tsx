import React from 'react'

const header = () => {
  return (
    <div>
        <header className="bg-red-400">
            <div className="header.logo text-4xl font-extrabold text-red-700"> Neha Shahzad.</div>
            <nav className="header.menu w-full sm:w-auto">
                <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-10 text-red-700 text-lg sm:text-xl md:text-2xl font-medium">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/portfolio">Portfolio</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
      
    </div>
  )
}

export default header

