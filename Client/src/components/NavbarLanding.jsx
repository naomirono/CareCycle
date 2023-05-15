import React from 'react'

const NavbarLanding = () => {
  return (
    <div>
        <header className="bg-gray-100 max-w-[1280px] mx-auto">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                {/* <img className="h-8 w-8" src={logo} alt="Logo" /> */}
              </div>
              <div className="hidden md:block">
                <h1 className="font-bold text-gray-800 text-xl">CareCycle</h1>
                <p className="text-gray-500 text-sm">Providing sanitary towels to girls in need</p>
              </div>
            </div>
            <div className="hidden md:block">
              <a href="#" className="font-medium text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm">
                Shop
              </a>
              <a href="#" className="font-medium text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm">
                Donate
              </a>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default NavbarLanding
